import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpPaymentPageComponent } from './cp-payment-page.component';

describe('CpPaymentPageComponent', () => {
  let component: CpPaymentPageComponent;
  let fixture: ComponentFixture<CpPaymentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpPaymentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
