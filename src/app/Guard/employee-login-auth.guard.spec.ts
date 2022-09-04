import { TestBed } from '@angular/core/testing';

import { EmployeeLoginAuthGuard } from './employee-login-auth.guard';

describe('EmployeeLoginAuthGuard', () => {
  let guard: EmployeeLoginAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeLoginAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
