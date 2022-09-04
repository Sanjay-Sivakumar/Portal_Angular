import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpInquiryPageComponent } from './cp-inquiry-page.component';

describe('CpInquiryPageComponent', () => {
  let component: CpInquiryPageComponent;
  let fixture: ComponentFixture<CpInquiryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpInquiryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpInquiryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
