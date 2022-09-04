import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpDashboardPageComponent } from './vp-dashboard-page.component';

describe('VpDashboardPageComponent', () => {
  let component: VpDashboardPageComponent;
  let fixture: ComponentFixture<VpDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
