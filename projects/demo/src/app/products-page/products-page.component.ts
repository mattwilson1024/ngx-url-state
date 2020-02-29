import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooleanMapper, IntMapper, NavigationMode, UrlState, UrlStateService } from 'ngx-url-state';
import { Subject } from 'rxjs';

export interface ProductsPageParams {
  page: number;
  pageSize: number;
  redText: boolean;
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {

  public urlState: UrlState<ProductsPageParams>;

  private componentDestroyed$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute,
              private urlStateService: UrlStateService) {}

  ngOnInit(): void {
    this.urlState = this.urlStateService.listen<ProductsPageParams>({
      activatedRoute: this.activatedRoute,
      componentDestroyed$: this.componentDestroyed$,
      paramDefinitions: {
        page: {
          mapper: IntMapper
        },
        pageSize: {
          mapper: {
            toString: (typedValue: number) => (typedValue * 100).toString(),
            fromString: (stringValue: string) => parseInt(stringValue, 10) / 100,
          },
          defaultValue: 20
        },
        redText: {
          mapper: BooleanMapper,
          defaultValue: false
        }
      }
    });

    this.urlState.params.page.subscribe(
      page => console.log(`page = ${page}`),
      err => console.error(err),
      () => console.log('page stream ended')
    );

    this.urlState.params.pageSize.subscribe(
      pageSize => console.log(`pageSize = ${pageSize}`),
      err => console.error(err),
      () => console.log('pageSize stream ended')
    );

    this.urlState.params.redText.subscribe(
      redText => console.log(`redText = ${redText}`),
      err => console.error(err),
      () => console.log('redText stream ended')
    );

    this.urlState.allParams.subscribe(
      params => console.log(`allParams = `, params),
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

  public changeParamsWithoutChangingHistory() {
    this.urlState.set({
      page: this.getSeconds(),
      pageSize: Math.floor((Math.random() * 100))
    }, NavigationMode.ReplaceHistory);
  }

  public alertCurrentPage() {
    alert(`The current page is ${this.urlState.snapshot.page}`);
  }

}
