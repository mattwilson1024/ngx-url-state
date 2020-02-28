import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UrlStateService } from '../url-state/url-state.service';
import { ObservableWrapper } from '../url-state/url-state.types';

export interface IExamplePageUrlState {
  page: number;
  pageSize: number;
}

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements OnInit {

  public urlState: ObservableWrapper<IExamplePageUrlState>;

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
        fromString: (paramString) => parseInt(paramString, 10),
        defaultValue: 20 // TODO: Implement support for defaults
      },
    });

    this.urlState.page.subscribe(
      page => console.log(`page is now ${page}`),
      err => console.error(err),
      () => console.log('page stream ended') // TODO: Never happens - need to give this some thought
    );
  }

  public getSeconds() {
    return new Date().getSeconds();
  }

  public alertCurrentPage() {
    alert(`The current page is ${this.urlState.page.value}`);
  }
}
