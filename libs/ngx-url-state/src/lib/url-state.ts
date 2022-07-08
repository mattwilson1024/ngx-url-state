import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, takeUntil, tap } from 'rxjs/operators';

import { DEFAULT_MAPPER } from './mappers';
import {
  BehaviorSubjectsFor,
  NavigationMode,
  ObservablesFor,
  StringsFor,
  UrlParamDefaultValueFn,
  UrlParamDefsFor,
  UrlStateConstructorConfig,
  UrlStateParamDef
} from './url-state.types';

export class UrlState<T> {
  // Config properties
  private paramDefs: UrlParamDefsFor<T>;
  private activatedRoute: ActivatedRoute;
  private router: Router;
  private destroy$: Subject<void>;

  // Internal state storage
  private paramStringSubjects: BehaviorSubjectsFor<StringsFor<T>>;
  private combinedParamsStringSubject$: BehaviorSubject<StringsFor<T>>;

  // External - exposed to consumer
  public params: ObservablesFor<T>;
  public allParams: Observable<T>;
  public snapshot: T;

  constructor(config: UrlStateConstructorConfig<T>, router: Router) {
    // Store config
    this.activatedRoute = config.activatedRoute;
    config.componentDestroyed$?.subscribe({
      next: () => this.destroy$.next(),
      complete: () => this.destroy$.complete(),
    });
    this.router = router;
  }

  public listen(paramDefs: UrlParamDefsFor<T>): void {
    this.destroy$?.next();
    this.destroy$?.complete();
    this.destroy$ = new Subject<void>();

    this.paramDefs = paramDefs;

    // Grab the initial params, including any defaults which we pre-emptively assume will be applied
    const initialParamStrings = this.getParamStrings(this.activatedRoute.snapshot.queryParams as Partial<T>);

    // Handle defaults
    this.applyMissingParamsToUrl();

    // Create individual BehaviorSubjects for each defined parameter
    this.paramStringSubjects = {} as BehaviorSubjectsFor<StringsFor<T>>;
    this.params = {} as ObservablesFor<T>;
    Object.keys(this.paramDefs).forEach(paramName => {
      const paramDef = this.getParamDef(paramName);
      const paramStringSubject$ = new BehaviorSubject(initialParamStrings[paramName]);
      this.paramStringSubjects[paramName] = paramStringSubject$;
      this.params[paramName] = paramStringSubject$.pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        map(stringValue => this.convertParamFromString(stringValue, paramDef)),
        shareReplay(1)
      );
    });

    // Setup the `allParams` observable which provides the user with a way of getting the full set
    // of parameters whenever _any_ of them change
    this.combinedParamsStringSubject$ = new BehaviorSubject<StringsFor<T>>(initialParamStrings);
    this.allParams = this.combinedParamsStringSubject$.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged((prev, curr) => {
        return Object.keys(this.paramDefs).every(paramName => prev[paramName] === curr[paramName]);
      }),
      map(stringValues => {
        const allParams: Partial<T> = {};
        Object.keys(this.paramDefs).forEach(paramName => {
          const paramDef = this.getParamDef(paramName);
          allParams[paramName] = this.convertParamFromString(stringValues[paramName], paramDef);
        });
        return allParams as T;
      }),
      shareReplay(1)
    );

    // Store a "snapshot" which is the latest version of all parameters, incase the consumer needs to read the value without observables
    this.allParams.pipe(
      takeUntil(this.destroy$),
      tap(allParams => this.snapshot = allParams)
    ).subscribe();

    // Watch router for changes
    this.activatedRoute.queryParams.pipe(
      takeUntil(this.destroy$),
    ).subscribe(queryParams => {
      const currentParamStrings = this.getParamStrings(queryParams as Partial<T>);
      this.combinedParamsStringSubject$.next(currentParamStrings);
      Object.keys(currentParamStrings).forEach(paramName => {
        this.paramStringSubjects[paramName].next(currentParamStrings[paramName]);
      });

      this.applyMissingParamsToUrl();
    });

    // Whenever the urlState instance is destroyed, complete all of the streams
    this.destroy$.subscribe(() => {
      this.combinedParamsStringSubject$.complete();
      Object.keys(this.paramDefs).forEach(paramName => {
        this.paramStringSubjects[paramName].complete();
      });
    });
  }

  private convertParamFromString<P>(stringValue: string|null|undefined, paramDef: UrlStateParamDef<P, T>): P {
    if (stringValue === null || stringValue === undefined) {
      return undefined;
    }
    if (paramDef.mapper) {
      return paramDef.mapper.fromString(stringValue);
    }
    return paramDef.mapper ? paramDef.mapper.fromString(stringValue) : DEFAULT_MAPPER.fromString(stringValue);
  }

  private convertParamToString<P>(paramValue: P|null|undefined, paramDef: UrlStateParamDef<P, T>): string {
    if (paramValue === null || paramValue === undefined) {
      return undefined;
    }
    return paramDef.mapper ? paramDef.mapper.toString(paramValue) : DEFAULT_MAPPER.toString(paramValue);
  }

  private identifyMissingParams(existingParams: Partial<T>): Partial<T> {
    const existingParamsClone = { ...existingParams };
    const paramsToUpdate: Partial<T> = {}

    Object.keys(this.paramDefs).forEach(paramName => {
      if (!Object.keys(existingParamsClone).includes(paramName)) {
        const defaultParamValue = this.getDefaultParamValue(this.getParamDef(paramName).defaultValue, existingParamsClone);
        if (defaultParamValue !== undefined) {
          existingParamsClone[paramName] = defaultParamValue;
          paramsToUpdate[paramName] = defaultParamValue;
        }
      }
    });

    return paramsToUpdate;
  }

  private getDefaultParamValue<P>(defaultValue: P | UrlParamDefaultValueFn<P, T>, paramValues: Partial<T>): P|undefined {
    switch (typeof defaultValue) {
      case 'function':
        return (defaultValue as UrlParamDefaultValueFn<P, T>)(paramValues);
      default:
        return defaultValue;
    }
  }

  private applyMissingParamsToUrl(): void {
    const paramsToUpdate = this.identifyMissingParams(this.activatedRoute.snapshot.queryParams as Partial<T>);

    if (Object.keys(paramsToUpdate)?.length) {
      this.set(paramsToUpdate, NavigationMode.ReplaceHistory);
    }

  }

  private getParamDef<P>(paramName: string): UrlStateParamDef<P, T> {
    return this.paramDefs[paramName];
  }

  public getParamStrings(queryParams: Partial<T>): StringsFor<T> {
    const missingParams = this.identifyMissingParams(queryParams);
    const currentParams: Partial<StringsFor<T>> = {};

    Object.keys(this.paramDefs).forEach(paramName => {
      const paramDef: UrlStateParamDef<unknown, T> = this.paramDefs[paramName];

      if (paramDef) {
        let paramStringValue;
        if (Object.keys(queryParams).includes(paramName)) {
          paramStringValue = queryParams[paramName];
        } else if (Object.keys(missingParams).includes(paramName)) {
          paramStringValue = this.convertParamToString(missingParams[paramName], paramDef);
        } else {
          paramStringValue = undefined;
        }

        currentParams[paramName] = paramStringValue;
      }
    });
    return currentParams as StringsFor<T>;
  }

  public set(paramsToChange: Partial<T>, navigationMode: NavigationMode = NavigationMode.AddToHistoryStack): Promise<boolean> {
    const queryParams: Params = {};

    /**
     * TODO: Here we need to identify if we're setting any parameters to undefined that should not be undefined in the current context.
     * We need to determine if the final state of the URL makes sense given the dynamic defaults of parameter definitions.
     * Ref: identifyMissingParams()
     */
    Object.keys(paramsToChange).forEach(paramName => {
      const paramDef = this.getParamDef(paramName);
      if (paramDef) {
        let newParamValue = paramsToChange[paramName];

        if (newParamValue === undefined && paramDef.defaultValue !== undefined) {
          newParamValue = paramDef.defaultValue;
        }

        const convertedToString = this.convertParamToString(newParamValue, paramDef);
        queryParams[paramName] = convertedToString;
      }
    });

    return this.router.navigate(
      [],
      {
        replaceUrl: navigationMode === NavigationMode.ReplaceHistory,
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }
}
