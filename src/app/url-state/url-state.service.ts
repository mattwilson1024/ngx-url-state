import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ObservableWrapper, UrlParamDefs } from './url-state.types';

@Injectable({
  providedIn: 'root'
})
export class UrlStateService {

  constructor(private router: Router) { }

  public listen<T>(activatedRoute: ActivatedRoute, paramDefs: UrlParamDefs<T>): ObservableWrapper<T> {
    let result: ObservableWrapper<any> = { };

    Object.entries(paramDefs).forEach(([paramKey, paramDef]) => {
      console.log(paramDef, paramKey);

      result[paramKey] = new BehaviorSubject(null);
    });



    activatedRoute.queryParamMap.pipe(
      map(paramMap => {

        paramMap.keys.forEach(key => {
          const paramValue = paramMap.get(key);
          console.log('url changeeeed', key, paramValue);
          if (result[key]) {
            result[key].next(paramValue);
          }
        });

      })
    ).subscribe();


    return result as ObservableWrapper<T>;
  }
}
