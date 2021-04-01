import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsReportComponent } from './channels-report.component';

describe('ChannelsReportComponent', () => {
  let component: ChannelsReportComponent;
  let fixture: ComponentFixture<ChannelsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
