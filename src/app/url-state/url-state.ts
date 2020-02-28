import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { IUrlStateParamDef, ObservableWrapper, UrlParamDefs } from './url-state.types';

export class UrlState<T> {
  private streams: ObservableWrapper<unknown> = {};
  private destroy$: Subject<void>;

  public get params(): ObservableWrapper<T> {
    return this.streams as ObservableWrapper<T>;
  }

  constructor(private activatedRoute: ActivatedRoute, paramDefs: UrlParamDefs<T>, componentDestroyed$?: Subject<void>) {
    this.destroy$ = componentDestroyed$ || new Subject<void>();

    // Create a behaviour subject for each defined parameter
    Object.keys(paramDefs).forEach(paramName => {
      this.streams[paramName] = new BehaviorSubject(null);
    });

    // Subscribe to changes in the route and next onto the subject for each param
    this.activatedRoute.queryParamMap.pipe(
      takeUntil(this.destroy$),
      map(paramMap => {
        paramMap.keys.forEach(paramName => {
          const paramValueString = paramMap.get(paramName);
          const paramDef: IUrlStateParamDef<unknown> = paramDefs[paramName];

          if (paramDef) {
            const convertedFromString = paramDef.fromString(paramValueString);
            this.streams[paramName].next(convertedFromString);
          }
        });
      })
    ).subscribe();

    // Whenever the urlState instance is destroyed, also complete each of the individual param streams
    this.destroy$.subscribe(() => {
      Object.keys(paramDefs).forEach(paramName => {
        this.streams[paramName].complete();
      });
    });
  }

}
