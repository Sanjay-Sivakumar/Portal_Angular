import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpPaymentPageComponent } from './vp-payment-page.component';

describe('VpPaymentPageComponent', () => {
  let component: VpPaymentPageComponent;
  let fixture: ComponentFixture<VpPaymentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpPaymentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
