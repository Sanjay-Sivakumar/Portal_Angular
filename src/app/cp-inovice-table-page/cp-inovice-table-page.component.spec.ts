import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpInoviceTablePageComponent } from './cp-inovice-table-page.component';

describe('CpInoviceTablePageComponent', () => {
  let component: CpInoviceTablePageComponent;
  let fixture: ComponentFixture<CpInoviceTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpInoviceTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpInoviceTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
