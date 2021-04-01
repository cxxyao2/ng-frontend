import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsCenterComponent } from './reports-center.component';

describe('ReportsCenterComponent', () => {
  let component: ReportsCenterComponent;
  let fixture: ComponentFixture<ReportsCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
