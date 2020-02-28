import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UrlState } from './url-state';
import { UrlStateConfig } from './url-state.types';

@Injectable({
  providedIn: 'root'
})
export class NgxUrlStateService {
  constructor(private router: Router) { }

  public listen<T>(config: UrlStateConfig<T>): UrlState<T> {
    return new UrlState<T>(config, this.router);
  }
}
