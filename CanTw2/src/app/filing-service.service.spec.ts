import { TestBed } from '@angular/core/testing';

import { FilingServiceService } from './filing-service.service';

describe('FilingServiceService', () => {
  let service: FilingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
