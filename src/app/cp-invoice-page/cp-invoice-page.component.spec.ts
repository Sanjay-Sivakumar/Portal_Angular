import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpInvoicePageComponent } from './cp-invoice-page.component';

describe('CpInvoicePageComponent', () => {
  let component: CpInvoicePageComponent;
  let fixture: ComponentFixture<CpInvoicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpInvoicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpInvoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
