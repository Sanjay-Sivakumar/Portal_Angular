import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpLoginPageComponent } from './ep-login-page.component';

describe('EpLoginPageComponent', () => {
  let component: EpLoginPageComponent;
  let fixture: ComponentFixture<EpLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
