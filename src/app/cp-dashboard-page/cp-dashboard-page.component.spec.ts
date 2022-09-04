import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpDashboardPageComponent } from './cp-dashboard-page.component';

describe('CpDashboardPageComponent', () => {
  let component: CpDashboardPageComponent;
  let fixture: ComponentFixture<CpDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
