import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UrlState } from './url-state';
import { UrlStateConstructorConfig } from './url-state.types';

@Injectable({
  providedIn: 'root'
})
export class UrlStateService {
  constructor(private router: Router) { }

  public create<T>(config: UrlStateConstructorConfig<T>): UrlState<T> {
    return new UrlState<T>(config, this.router);
  }
}
