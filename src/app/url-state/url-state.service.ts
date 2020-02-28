import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { UrlState } from './url-state';
import { UrlParamDefs } from './url-state.types';

@Injectable({
  providedIn: 'root'
})
export class UrlStateService {
  constructor() { }

  public listen<T>(activatedRoute: ActivatedRoute, paramDefs: UrlParamDefs<T>, componentDestroyed$?: Subject<void>): UrlState<T> {
    return new UrlState<T>(activatedRoute, paramDefs, componentDestroyed$);
  }
}
