import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UrlStateService } from '../url-state/url-state.service';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements OnInit {

  private counter = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private urlStateService: UrlStateService) {
  }

  ngOnInit(): void {

    const listeners = this.urlStateService.listen<IExamplePageUrlState>(this.activatedRoute, {
      page: {
        toString: (value) => value.toString(),
        fromString: (paramString) => parseInt(paramString, 10)
      },
      pageSize: {
        toString: (value) => value.toString(),
        fromString: (paramString) => parseInt(paramString, 10)
      },
    });

    listeners.page.subscribe(
      page => console.log(`page is now ${page}`),
      err => console.error(err),
      () => console.log('page stream ended')
    );

    // TODO: Remove this:
    this.startCounter();
  }


  private startCounter() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
}


export interface IExamplePageUrlState {
  page: number;
  pageSize: number;
}




// const x: ObservableWrapper<IExamplePageUrlState>;

