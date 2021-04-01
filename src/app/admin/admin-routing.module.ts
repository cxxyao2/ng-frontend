import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersReportComponent } from './orders-report/orders-report.component';
import { ReportsCenterComponent } from './reports-center/reports-center.component';
import { ChannelsReportComponent } from './channels-report/channels-report.component';

const adminRoutes: Routes = [
  { path: 'channels-report', component: ChannelsReportComponent },
  { path: 'orders-report', component: OrdersReportComponent },
  { path: 'reports-center', component: ReportsCenterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
