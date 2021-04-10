import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels-report',
  templateUrl: './channels-report.component.html',
  styleUrls: ['./channels-report.component.scss'],
})
export class ChannelsReportComponent implements OnInit {
  theme = 'default';
  options = {
    title: {
      text: 'Sales data by channels',
      subtext: 'Engine Oil',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['distributors', 'customers', 'groups'],
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [50, 100],
        roseType: 'area',
        data: [
          { value: 10, name: 'distributors' },
          { value: 5, name: 'customers' },
          { value: 15, name: 'groups' },
        ],
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
