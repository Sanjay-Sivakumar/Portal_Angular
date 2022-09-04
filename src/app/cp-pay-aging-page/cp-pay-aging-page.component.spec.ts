import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpPayAgingPageComponent } from './cp-pay-aging-page.component';

describe('CpPayAgingPageComponent', () => {
  let component: CpPayAgingPageComponent;
  let fixture: ComponentFixture<CpPayAgingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpPayAgingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpPayAgingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
