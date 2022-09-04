import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpLoginPageComponent } from './vp-login-page.component';

describe('VpLoginPageComponent', () => {
  let component: VpLoginPageComponent;
  let fixture: ComponentFixture<VpLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
