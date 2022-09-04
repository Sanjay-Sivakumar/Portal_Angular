import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpCreditMemoPageComponent } from './cp-credit-memo-page.component';

describe('CpCreditMemoPageComponent', () => {
  let component: CpCreditMemoPageComponent;
  let fixture: ComponentFixture<CpCreditMemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpCreditMemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpCreditMemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
