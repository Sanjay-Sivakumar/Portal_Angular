import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpLeaveDetPageComponent } from './ep-leave-det-page.component';

describe('EpLeaveDetPageComponent', () => {
  let component: EpLeaveDetPageComponent;
  let fixture: ComponentFixture<EpLeaveDetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpLeaveDetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpLeaveDetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
