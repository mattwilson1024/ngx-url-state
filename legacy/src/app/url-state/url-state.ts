import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, takeUntil, tap } from 'rxjs/operators';

import { DEFAULT_MAPPER } from './mappers';
import { BehaviorSubjectsFor, NavigationMode, ObservablesFor, StringsFor, UrlParamDefsFor, UrlStateConfig, UrlStateParamDef } from './url-state.types';

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
  private paramObservables: ObservablesFor<T>;
  private allParams$: Observable<T>;
  private lastestSnapshot: T;

  public get params(): ObservablesFor<T> {
    return this.paramObservables;
  }

  public get allParams(): Observable<T> {
    return this.allParams$;
  }

  public get snapshot(): T {
    return this.lastestSnapshot;
  }

  constructor(config: UrlStateConfig<T>, router: Router) {
    // Store config
    this.activatedRoute = config.activatedRoute;
    this.destroy$ = config.componentDestroyed$ || new Subject<void>();
    this.paramDefs = config.paramDefinitions;
    this.router = router;

    // Grab the initial params, including any defaults which we pre-emptyively assume will be applied
    const initialParamStrings = this.getParamStrings(this.activatedRoute.snapshot.queryParamMap);

    // Handle defaults
    this.applyMissingParamsToUrl();

    // Create individual BehaviorSubjects for each defined parameter
    this.paramStringSubjects = {} as BehaviorSubjectsFor<StringsFor<T>>;
    this.paramObservables = {} as ObservablesFor<T>;
    Object.keys(this.paramDefs).forEach(paramName => {
      const paramDef = this.getParamDef(paramName);
      const paramStringSubject$ = new BehaviorSubject(initialParamStrings[paramName]);
      this.paramStringSubjects[paramName] = paramStringSubject$;
      this.paramObservables[paramName] = paramStringSubject$.pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        map(stringValue => this.convertParamFromString(stringValue, paramDef)),
        shareReplay(1)
      );
    });

    // Setup the `allParams` observable which provides the user with a way of getting the full set of parameters whenever _any_ of them change
    this.combinedParamsStringSubject$ = new BehaviorSubject<StringsFor<T>>(initialParamStrings);
    this.allParams$ = this.combinedParamsStringSubject$.pipe(
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
    this.allParams$.pipe(
      takeUntil(this.destroy$),
      tap(allParams => this.lastestSnapshot = allParams)
    ).subscribe();

    // Watch router for changes
    this.activatedRoute.queryParamMap.pipe(
      takeUntil(this.destroy$),
    ).subscribe(queryParamMap => {
      const currentParamStrings = this.getParamStrings(queryParamMap);

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

  private convertParamFromString<P>(stringValue: string|null|undefined, paramDef: UrlStateParamDef<P>): P {
    if (stringValue === null || stringValue === undefined) {
      return undefined;
    }
    if (paramDef.mapper) {
      return paramDef.mapper.fromString(stringValue);
    }
    return paramDef.mapper ? paramDef.mapper.fromString(stringValue) : DEFAULT_MAPPER.fromString(stringValue);
  }

  private convertParamToString<P>(paramValue: P|null|undefined, paramDef: UrlStateParamDef<P>): string {
    if (paramValue === null || paramValue === undefined) {
      return undefined;
    }
    return paramDef.mapper ? paramDef.mapper.toString(paramValue) : DEFAULT_MAPPER.toString(paramValue);
  }

  private identifyMissingParams(): string[] {
    const existingQueryParamMap = this.activatedRoute.snapshot.queryParamMap;
    return Object.keys(this.paramDefs)
      .filter(paramName => {
        const paramDef = this.getParamDef(paramName);
        return paramDef && !existingQueryParamMap.has(paramName) && paramDef.defaultValue !== undefined;
      });
  }

  private applyMissingParamsToUrl(): void {
    const missingParamNames = this.identifyMissingParams();
    const hasMissingParams = Object.keys(missingParamNames).length > 0;
    if (hasMissingParams) {
      const paramsToAddToUrl: Partial<T> = {};
      missingParamNames.forEach(paramName => {
        const paramDef = this.getParamDef(paramName);
        if (paramDef) {
          const defaultValue = paramDef.defaultValue;
          paramsToAddToUrl[paramName] = defaultValue;
        }
      });

      this.set(paramsToAddToUrl, NavigationMode.ReplaceHistory);
    }
  }

  private getParamDef<P>(paramName: string): UrlStateParamDef<P> {
    return this.paramDefs[paramName];
  }

  public getParamStrings(queryParamMap: ParamMap): StringsFor<T> {
    const missingParamNames = this.identifyMissingParams();
    const currentParams: Partial<StringsFor<T>> = {};

    Object.keys(this.paramDefs).forEach(paramName => {
      const paramDef: UrlStateParamDef<unknown> = this.paramDefs[paramName];

      if (paramDef) {
        let paramStringValue;
        if (queryParamMap.has(paramName)) {
          paramStringValue = queryParamMap.get(paramName);
        } else if (missingParamNames.includes(paramName)) {
          paramStringValue = this.convertParamToString(paramDef.defaultValue, paramDef);
        } else {
          paramStringValue = undefined;
        }

        currentParams[paramName] = paramStringValue;
      }
    });
    return currentParams as StringsFor<T>;
  }

  public set(paramsToChange: Partial<T>, navigationMode: NavigationMode =  NavigationMode.AddToHistoryStack): Promise<boolean> {
    const queryParams: Params = {};

    Object.keys(paramsToChange).forEach(paramName => {
      const paramDef = this.getParamDef(paramName);
      if (paramDef) {
        const convertedToString = this.convertParamToString(paramsToChange[paramName], paramDef);
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
