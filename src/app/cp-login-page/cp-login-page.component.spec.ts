import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpLoginPageComponent } from './cp-login-page.component';

describe('CpLoginPageComponent', () => {
  let component: CpLoginPageComponent;
  let fixture: ComponentFixture<CpLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
