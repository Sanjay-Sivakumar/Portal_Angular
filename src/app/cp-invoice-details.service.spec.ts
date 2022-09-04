import { TestBed } from '@angular/core/testing';

import { CpInvoiceDetailsService } from './cp-invoice-details.service';

describe('CpInvoiceDetailsService', () => {
  let service: CpInvoiceDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpInvoiceDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
