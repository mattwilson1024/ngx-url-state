import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUrlStateParamDef, ObservableWrapper, UrlParamDefs } from './url-state.types';

@Injectable({
  providedIn: 'root'
})
export class UrlStateService {

  constructor(private router: Router) { }

  public listen<T>(activatedRoute: ActivatedRoute, paramDefs: UrlParamDefs<T>): ObservableWrapper<T> {
    let streams: ObservableWrapper<any> = { };

    // Create a behaviour subject for each defined parameter
    Object.keys(paramDefs).forEach(paramName => {
      streams[paramName] = new BehaviorSubject(null);
    });

    // Subscribe to changes in the route and next onto the subject for each param
    // TODO: When/how do we unsubscribe? One option is allow the consumer to pass in a componentDestroyed$ observable
    activatedRoute.queryParamMap.pipe(
      map(paramMap => {

        paramMap.keys.forEach(paramName => {
          const paramValueString = paramMap.get(paramName);
          const paramDef: IUrlStateParamDef<unknown> = paramDefs[paramName];

          if (paramDef) {
            const convertedFromString = paramDef.fromString(paramValueString);
            streams[paramName].next(convertedFromString);
          }
        });

      })
    ).subscribe();

    // Return to the consumer an object with observables/subjects for each possible params
    return streams as ObservableWrapper<T>;
  }
}
