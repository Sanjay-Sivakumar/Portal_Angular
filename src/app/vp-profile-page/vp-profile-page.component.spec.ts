import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpProfilePageComponent } from './vp-profile-page.component';

describe('VpProfilePageComponent', () => {
  let component: VpProfilePageComponent;
  let fixture: ComponentFixture<VpProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
