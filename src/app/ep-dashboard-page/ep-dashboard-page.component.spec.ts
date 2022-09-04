import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpDashboardPageComponent } from './ep-dashboard-page.component';

describe('EpDashboardPageComponent', () => {
  let component: EpDashboardPageComponent;
  let fixture: ComponentFixture<EpDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
