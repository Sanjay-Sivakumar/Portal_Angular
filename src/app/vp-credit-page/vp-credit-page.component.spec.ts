import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpCreditPageComponent } from './vp-credit-page.component';

describe('VpCreditPageComponent', () => {
  let component: VpCreditPageComponent;
  let fixture: ComponentFixture<VpCreditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpCreditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpCreditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
