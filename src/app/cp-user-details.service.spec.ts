import { TestBed } from '@angular/core/testing';

import { CpUserDetailsService } from './cp-user-details.service';

describe('CpUserDetailsService', () => {
  let service: CpUserDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpUserDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
