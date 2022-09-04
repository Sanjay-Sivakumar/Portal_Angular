import { TestBed } from '@angular/core/testing';

import { LoginAuthVendorGuard } from './login-auth-vendor.guard';

describe('LoginAuthVendorGuard', () => {
  let guard: LoginAuthVendorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginAuthVendorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
