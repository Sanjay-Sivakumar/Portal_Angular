import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpDebitPageComponent } from './vp-debit-page.component';

describe('VpDebitPageComponent', () => {
  let component: VpDebitPageComponent;
  let fixture: ComponentFixture<VpDebitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpDebitPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpDebitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
