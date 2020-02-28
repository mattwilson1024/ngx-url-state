import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { BehaviorSubjectsFor, UrlParamDefsFor, UrlStateParamDef } from './url-state.types';

export class UrlState<T> {
  private allParams$: BehaviorSubject<T>;
  private individualParams: BehaviorSubjectsFor<T>;

  private destroy$: Subject<void>;

  public get allParams(): BehaviorSubject<T> {
    return this.allParams$;
  }

  public get params(): BehaviorSubjectsFor<T> {
    return this.individualParams as BehaviorSubjectsFor<T>;
  }

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private paramDefs: UrlParamDefsFor<T>,
              componentDestroyed$?: Subject<void>) {
    this.destroy$ = componentDestroyed$ || new Subject<void>();

    // Create a BehaviorSubject for allParams
    this.allParams$ = new BehaviorSubject<T>(null);

    // Create individual BehaviorSubjects for each defined parameter
    this.individualParams = {} as BehaviorSubjectsFor<T>;
    Object.keys(paramDefs).forEach(paramName => {
      this.individualParams[paramName] = new BehaviorSubject(null);
    });

    // Subscribe to changes in the route and next onto the subject for each param
    this.activatedRoute.queryParamMap.pipe(
      takeUntil(this.destroy$),
      map(paramMap => {
        const allParamsSnapshot: Partial<T> = {};
        Object.keys(paramDefs).forEach(paramName => {
          const paramValueString = paramMap.has(paramName) ? paramMap.get(paramName) : undefined; // TODO: Consider allowing configuration for implicit value to assume if not found in the url?
          const paramDef: UrlStateParamDef<unknown> = paramDefs[paramName];

          if (paramDef) {
            const convertedFromString = this.convertParamFromString(paramValueString, paramDef);

            allParamsSnapshot[paramName] = convertedFromString;
            this.individualParams[paramName].next(convertedFromString);
          }
        });
        this.allParams$.next(allParamsSnapshot as T);
      })
    ).subscribe();

    // Whenever the urlState instance is destroyed, also complete each of the individual param streams
    this.destroy$.subscribe(() => {
      this.allParams$.complete();
      Object.keys(paramDefs).forEach(paramName => {
        this.individualParams[paramName].complete();
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

  public set(paramsToChange: Partial<T>): void {
    const queryParams: Params = {};

    Object.keys(paramsToChange).forEach(paramName => {
      const paramDef: UrlStateParamDef<unknown> = this.paramDefs[paramName];
      if (paramDef) {
        const convertedToString = paramDef.toString(paramsToChange[paramName]);
        queryParams[paramName] = convertedToString;
      }
    });

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }
}
