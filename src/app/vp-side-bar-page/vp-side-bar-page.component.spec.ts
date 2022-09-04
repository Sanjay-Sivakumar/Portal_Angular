import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpSideBarPageComponent } from './vp-side-bar-page.component';

describe('VpSideBarPageComponent', () => {
  let component: VpSideBarPageComponent;
  let fixture: ComponentFixture<VpSideBarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpSideBarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpSideBarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
