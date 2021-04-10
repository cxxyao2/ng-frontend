import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCenterModule } from '../material-center.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

import { AdminRoutingModule } from './admin-routing.module';
import { ReportsCenterComponent } from './reports-center/reports-center.component';
import { ChannelsReportComponent } from './channels-report/channels-report.component';
import { OrdersReportComponent } from './orders-report/orders-report.component';

@NgModule({
  declarations: [
    ReportsCenterComponent,
    ChannelsReportComponent,
    OrdersReportComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialCenterModule,
    AdminRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class AdminModule {}
