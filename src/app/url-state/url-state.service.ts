import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { UrlState } from './url-state';
import { UrlParamDefsFor } from './url-state.types';

@Injectable({
  providedIn: 'root'
})
export class UrlStateService {
  constructor(private router: Router) { }

  public listen<T>(activatedRoute: ActivatedRoute, paramDefs: UrlParamDefsFor<T>, componentDestroyed$?: Subject<void>): UrlState<T> {
    return new UrlState<T>(this.router, activatedRoute, paramDefs, componentDestroyed$);
  }
}
