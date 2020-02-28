import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, shareReplay, takeUntil } from 'rxjs/operators';

import { BehaviorSubjectsFor, NavigationMode, ObservablesFor, UrlParamDefsFor, UrlStateParamDef } from './url-state.types';

export class UrlState<T> {
  private allParamsSubject$: BehaviorSubject<T>;
  private individualParamSubjects: BehaviorSubjectsFor<T>;

  private allParams$: Observable<T>;
  private individualParams: ObservablesFor<T>;

  private destroy$: Subject<void>;

  public get allParams(): Observable<T> {
    return this.allParams$;
  }

  public get params(): ObservablesFor<T> {
    return this.individualParams;
  }

  public get snapshot(): T {
    return this.allParamsSubject$.value;
  }

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private paramDefs: UrlParamDefsFor<T>,
              componentDestroyed$?: Subject<void>) {
    this.destroy$ = componentDestroyed$ || new Subject<void>();

    // Grab the initial params, including any defaults which we pre-emptyively assume will be applied
    const initialParams = this.getCurrentParams(this.activatedRoute.snapshot.queryParamMap, true);

    // Handle defaults
    this.applyMissingParamsToUrl();

    // Create a BehaviorSubject for allParams
    this.allParamsSubject$ = new BehaviorSubject<T>(initialParams);
    this.allParams$ = this.allParamsSubject$.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
      shareReplay(1)
    );

    // Create individual BehaviorSubjects for each defined parameter
    this.individualParamSubjects = {} as BehaviorSubjectsFor<T>;
    this.individualParams = {} as ObservablesFor<T>;
    Object.keys(paramDefs).forEach(paramName => {
      const individualParamSubject$ = new BehaviorSubject(initialParams[paramName]);
      this.individualParamSubjects[paramName] = individualParamSubject$;
      this.individualParams[paramName] = individualParamSubject$.pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        shareReplay(1)
      );
    });

    // Watch router for changes
    this.activatedRoute.queryParamMap.pipe(
      takeUntil(this.destroy$),
    ).subscribe(queryParamMap => {
      const currentParams = this.getCurrentParams(queryParamMap, true);

      this.allParamsSubject$.next(currentParams);
      Object.keys(currentParams).forEach(paramName => {
        this.individualParamSubjects[paramName].next(currentParams[paramName]);
      });
    });

    // Whenever the urlState instance is destroyed, complete all of the streams
    this.destroy$.subscribe(() => {
      this.allParamsSubject$.complete();
      Object.keys(paramDefs).forEach(paramName => {
        this.individualParamSubjects[paramName].complete();
      });
    });
  }

  private convertParamFromString<P>(stringValue: string|null|undefined, paramDef: UrlStateParamDef<P>): P {
    if (stringValue === null || stringValue === undefined) {
      return undefined;
    }
    // TODO: What if `fromString` is not provided?
    return paramDef.fromString(stringValue);
  }

  private convertParamToString<P>(paramValue: P|null|undefined, paramDef: UrlStateParamDef<P>): string {
    if (paramValue === null || paramValue === undefined) {
      return undefined;
    }
    // TODO: What if `toString` is not provided?
    return paramDef.toString(paramValue);
  }

  private determineMissingParams(): Partial<T> {
    const defaultsToAddToUrl: Partial<T> = {};
    const initialQueryParamMap = this.activatedRoute.snapshot.queryParamMap;
    Object.keys(this.paramDefs).forEach(paramName => {
      const paramDef: UrlStateParamDef<unknown> = this.paramDefs[paramName];
      if (paramDef && paramDef.defaultValue !== undefined && !initialQueryParamMap.has(paramName)) {
        defaultsToAddToUrl[paramName] = paramDef.defaultValue;
      }
    });
    return defaultsToAddToUrl;
  }

  private applyMissingParamsToUrl(): void {
    const missingParams = this.determineMissingParams();
    const hasMissingParams = Object.keys(missingParams).length > 0;
    if (hasMissingParams) {
      this.set(missingParams, NavigationMode.ReplaceHistory);
    }
  }

  public getCurrentParams(queryParamMap: ParamMap, applyDefaults: boolean = false): T {
    const missingParams = this.determineMissingParams();
    const currentParams: Partial<T> = {};

    Object.keys(this.paramDefs).forEach(paramName => {
      const paramDef: UrlStateParamDef<unknown> = this.paramDefs[paramName];

      if (paramDef) {
        let paramValue;
        if (queryParamMap.has(paramName)) {
          const paramValueString = queryParamMap.get(paramName);
          paramValue = this.convertParamFromString(paramValueString, paramDef);
        } else if (applyDefaults && missingParams[paramName] !== undefined) {
          paramValue = missingParams[paramName];
        } else {
          paramValue = undefined;
        }

        currentParams[paramName] = paramValue;
      }
    });
    return currentParams as T;
  }

  public set(paramsToChange: Partial<T>, navigationMode: NavigationMode =  NavigationMode.AddToHistoryStack): Promise<boolean> {
    const queryParams: Params = {};

    Object.keys(paramsToChange).forEach(paramName => {
      const paramDef: UrlStateParamDef<unknown> = this.paramDefs[paramName];
      if (paramDef) {
        const convertedToString = paramDef.toString(paramsToChange[paramName]);
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
