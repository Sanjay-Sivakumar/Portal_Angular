import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpInvoiceDetPAgeComponent } from './vp-invoice-det-page.component';

describe('VpInvoiceDetPAgeComponent', () => {
  let component: VpInvoiceDetPAgeComponent;
  let fixture: ComponentFixture<VpInvoiceDetPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpInvoiceDetPAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpInvoiceDetPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
