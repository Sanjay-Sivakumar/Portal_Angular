import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpSalesOrderPageComponent } from './cp-sales-order-page.component';

describe('CpSalesOrderPageComponent', () => {
  let component: CpSalesOrderPageComponent;
  let fixture: ComponentFixture<CpSalesOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpSalesOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpSalesOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
