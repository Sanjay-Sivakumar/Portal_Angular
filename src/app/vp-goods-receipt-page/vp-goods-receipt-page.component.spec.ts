import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpGoodsReceiptPageComponent } from './vp-goods-receipt-page.component';

describe('VpGoodsReceiptPageComponent', () => {
  let component: VpGoodsReceiptPageComponent;
  let fixture: ComponentFixture<VpGoodsReceiptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpGoodsReceiptPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpGoodsReceiptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
