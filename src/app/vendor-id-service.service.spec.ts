import { TestBed } from '@angular/core/testing';

import { VendorIdServiceService } from './vendor-id-service.service';

describe('VendorIdServiceService', () => {
  let service: VendorIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
