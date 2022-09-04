import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpPayslipPdfPafeComponent } from './ep-payslip-pdf-pafe.component';

describe('EpPayslipPdfPafeComponent', () => {
  let component: EpPayslipPdfPafeComponent;
  let fixture: ComponentFixture<EpPayslipPdfPafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpPayslipPdfPafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpPayslipPdfPafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
