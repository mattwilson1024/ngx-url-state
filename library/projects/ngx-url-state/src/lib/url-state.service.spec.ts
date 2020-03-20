import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UrlStateService } from './url-state.service';

describe('NgxUrlStateService', () => {
  let service: UrlStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
    });
    service = TestBed.inject(UrlStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
