import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpProfilePageComponent } from './ep-profile-page.component';

describe('EpProfilePageComponent', () => {
  let component: EpProfilePageComponent;
  let fixture: ComponentFixture<EpProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
