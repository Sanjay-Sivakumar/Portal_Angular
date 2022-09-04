import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpRfqPageComponent } from './vp-rfq-page.component';

describe('VpRfqPageComponent', () => {
  let component: VpRfqPageComponent;
  let fixture: ComponentFixture<VpRfqPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpRfqPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpRfqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
