import { TestBed } from '@angular/core/testing';

import { TimeapiService } from './timeapi.service';

describe('TimeapiService', () => {
  let service: TimeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
