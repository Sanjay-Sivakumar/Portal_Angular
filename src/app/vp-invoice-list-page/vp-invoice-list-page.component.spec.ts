import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpInvoiceListPageComponent } from './vp-invoice-list-page.component';

describe('VpInvoiceListPageComponent', () => {
  let component: VpInvoiceListPageComponent;
  let fixture: ComponentFixture<VpInvoiceListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpInvoiceListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpInvoiceListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
