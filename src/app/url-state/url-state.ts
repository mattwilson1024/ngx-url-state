import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { IUrlStateParamDef, ObservableWrapper, UrlParamDefs } from './url-state.types';

export class UrlState<T> {
  private allParams$: BehaviorSubject<T>;
  private individualParams: ObservableWrapper<T>;

  private destroy$: Subject<void>;

  public get allParams(): BehaviorSubject<T> {
    return this.allParams$;
  }

  public get params(): ObservableWrapper<T> {
    return this.individualParams as ObservableWrapper<T>;
  }

  constructor(private activatedRoute: ActivatedRoute, paramDefs: UrlParamDefs<T>, componentDestroyed$?: Subject<void>) {
    this.destroy$ = componentDestroyed$ || new Subject<void>();

    // Create a BehaviorSubject for allParams
    this.allParams$ = new BehaviorSubject<T>(null);

    // Create individual BehaviorSubjects for each defined parameter
    this.individualParams = {} as ObservableWrapper<T>;
    Object.keys(paramDefs).forEach(paramName => {
      this.individualParams[paramName] = new BehaviorSubject(null);
    });

    // Subscribe to changes in the route and next onto the subject for each param
    this.activatedRoute.queryParamMap.pipe(
      takeUntil(this.destroy$),
      map(paramMap => {
        const allParamsSnapshot: Partial<T> = {};
        paramMap.keys.forEach(paramName => {
          const paramValueString = paramMap.get(paramName);
          const paramDef: IUrlStateParamDef<unknown> = paramDefs[paramName];

          if (paramDef) {
            const convertedFromString = paramDef.fromString(paramValueString);

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

}
