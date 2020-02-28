import { TestBed } from '@angular/core/testing';

import { NgxUrlStateService } from './ngx-url-state.service';

describe('NgxUrlStateService', () => {
  let service: NgxUrlStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUrlStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
