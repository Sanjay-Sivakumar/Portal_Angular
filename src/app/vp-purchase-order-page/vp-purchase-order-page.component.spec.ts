import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpPurchaseOrderPageComponent } from './vp-purchase-order-page.component';

describe('VpPurchaseOrderPageComponent', () => {
  let component: VpPurchaseOrderPageComponent;
  let fixture: ComponentFixture<VpPurchaseOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpPurchaseOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpPurchaseOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
