import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPCustDeliveryPageComponent } from './cpcust-delivery-page.component';

describe('CPCustDeliveryPageComponent', () => {
  let component: CPCustDeliveryPageComponent;
  let fixture: ComponentFixture<CPCustDeliveryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPCustDeliveryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPCustDeliveryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
