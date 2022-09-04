import { TestBed } from '@angular/core/testing';

import { LoginAuthEmployeeGuard } from './login-auth-employee.guard';

describe('LoginAuthEmployeeGuard', () => {
  let guard: LoginAuthEmployeeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginAuthEmployeeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
