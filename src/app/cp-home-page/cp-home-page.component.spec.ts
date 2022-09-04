import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpHomePageComponent } from './cp-home-page.component';

describe('CpHomePageComponent', () => {
  let component: CpHomePageComponent;
  let fixture: ComponentFixture<CpHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
