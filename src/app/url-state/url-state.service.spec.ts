import { TestBed } from '@angular/core/testing';

import { UrlStateService } from './url-state.service';

describe('UrlStateService', () => {
  let service: UrlStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
