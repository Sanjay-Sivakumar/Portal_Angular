import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpProfilePageComponent } from './cp-profile-page.component';

describe('CpProfilePageComponent', () => {
  let component: CpProfilePageComponent;
  let fixture: ComponentFixture<CpProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
