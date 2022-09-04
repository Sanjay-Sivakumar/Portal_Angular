import { TestBed } from '@angular/core/testing';

import { CpCustPayService } from './cp-cust-pay.service';

describe('CpCustPayService', () => {
  let service: CpCustPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpCustPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
