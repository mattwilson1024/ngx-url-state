import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { Subject } from 'rxjs';

import { IntMapper, StringMapper } from './mappers';
import { UrlState } from './url-state';
import { UrlStateService } from './url-state.service';

interface IExampleParams {
  page: number;
  pageSize: number;
  search?: string;
}

@Component({
  selector: 'app-test-page',
  template: ''
})
class TestPageComponent implements OnInit {
  public urlState: UrlState<IExampleParams>;

  constructor(private activatedRoute: ActivatedRoute,
              private urlStateService: UrlStateService) {}

  ngOnInit() {
    this.urlState = this.urlStateService.listen<IExampleParams>({
      activatedRoute: this.activatedRoute,
      componentDestroyed$: new Subject<void>(),
      paramDefinitions: {
        page: {
          mapper: IntMapper,
          defaultValue: 1
        },
        pageSize: {
          mapper: IntMapper,
          defaultValue: 5
        },
        search: {
          mapper: StringMapper
        }
      }
    });
  }
}


describe('NgxUrlStateService', () => {
  let spectator: SpectatorRouting<TestPageComponent>;
  const createComponent = createRoutingFactory({
    component: TestPageComponent,
    declarations: [],
    providers: [
      UrlStateService
    ],
    stubsEnabled: true
  });

  beforeEach(async () => {
    spectator = createComponent({
      queryParams: {
      }
    });
    await spectator.fixture.whenStable();
  });

  describe('snapshot functionality', () => {
    it('should have correct initial snapshot, with default values applied', async () => {
      expect(spectator.component.urlState.snapshot.page).toBe(1);
      expect(spectator.component.urlState.snapshot.pageSize).toBe(5);
      expect(spectator.component.urlState.snapshot.search).toBeUndefined();

      spectator.setRouteQueryParam('search', 'Harry');
      expect(spectator.component.urlState.snapshot.search).toBe('Harry');
    });

    it('should have correct snapshot after updating a paramater in the URL', async () => {
      spectator.setRouteQueryParam('search', 'Harry');

      expect(spectator.component.urlState.snapshot.page).toBe(1);
      expect(spectator.component.urlState.snapshot.pageSize).toBe(5);
      expect(spectator.component.urlState.snapshot.search).toBe('Harry');
    });
  });

  describe('individual observables for each parameter', () => {
    let pageEmissions: number[];
    let searchEmissions: string[];

    beforeEach(() => {
      pageEmissions = [];
      searchEmissions = [];

      spectator.component.urlState.params.page.subscribe(result => pageEmissions.push(result));
      spectator.component.urlState.params.search.subscribe(result => searchEmissions.push(result));
    });

    it('should emit the initial value immediately', async () => {
      expect(pageEmissions).toEqual([1]);
      expect(searchEmissions).toEqual([undefined]);
    });

    it('should emit the new value of an individual parameter onto its observable when the query param changes', async () => {
      spectator.setRouteQueryParam('search', 'Harry');

      expect(pageEmissions).toEqual([1]);
      expect(searchEmissions).toEqual([undefined, 'Harry']);
    });
  });

  describe('allParams observable', () => {
    let allParamsEmissions: IExampleParams[];

    beforeEach(() => {
      allParamsEmissions = [];
      spectator.component.urlState.allParams.subscribe(result => allParamsEmissions.push(result));
    });

    it('should emit the initial values immediately, including defaults', async () => {
      expect(allParamsEmissions).toEqual([
        { page: 1, pageSize: 5 }
      ]);
    });

    it('should emit the full set of latest values each time any parameter changes', async () => {
      spectator.setRouteQueryParam('search', 'Harry');

      expect(allParamsEmissions).toEqual([
        { page: 1, pageSize: 5 },
        { page: 1, pageSize: 5, search: 'Harry' }
      ]);
    });
  });

  // describe('set method', () => {
  //   let allParamsEmissions: IExampleParams[];

  //   beforeEach(() => {
  //     allParamsEmissions = [];
  //     spectator.component.urlState.allParams.subscribe(result => allParamsEmissions.push(result));
  //   });

  //   it('should trigger navigation', async () => {
  //     spectator.inject(ActivatedRoute).queryParamMap.subscribe(x => console.log(x));


  //     spectator.component.urlState.set({
  //       page: 2
  //     });
  //     await spectator.fixture.whenStable();

  //     // expect(spectator.activatedRouteStub.snapshot.queryParamMap.get('page')).toBe('2');
  //     // await spectator.fixture.whenStable();

  //     // expect(44).toBe('2');
  //   });
  // });

});
