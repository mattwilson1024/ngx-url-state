import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { UrlState, UrlStateService } from '../url-state';

export interface IExamplePageUrlState {
  page: number;
  pageSize: number;
}

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements OnInit, OnDestroy {

  public urlState: UrlState<IExamplePageUrlState>;

  private componentDestroyed$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute,
              private urlStateService: UrlStateService) {}

  ngOnInit(): void {
    this.urlState = this.urlStateService.listen<IExamplePageUrlState>(this.activatedRoute, {
      page: {
        toString: (value) => value.toString(),
        fromString: (paramString) => parseInt(paramString, 10)
      },
      pageSize: {
        toString: (value) => value.toString(),
        fromString: (paramString) => parseInt(paramString, 10) * 100,
        defaultValue: 20 // TODO: Implement support for defaults
      },
    }, this.componentDestroyed$);

    this.urlState.params.page.subscribe(
      page => console.log(`page is now ${page}`),
      err => console.error(err),
      () => console.log('page stream ended')
    );

    this.urlState.allParams.subscribe(
      params => console.log(`allParams is now`, params),
      err => console.error(err),
      () => console.log('allParamsStream ended')
    );
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  public getSeconds() {
    return new Date().getSeconds();
  }

  public changeParams() {
    this.urlState.set({
      page: this.getSeconds(),
      pageSize: Math.floor((Math.random() * 100))
    });
  }

  public alertCurrentPage() {
    alert(`The current page is ${this.urlState.params.page.value}`);
  }
}
