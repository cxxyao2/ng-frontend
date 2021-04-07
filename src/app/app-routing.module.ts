import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './menu/homepage/homepage.component';
import { ChannelComponent } from './channel/channel.component';

import { PageNotFoundComponent } from './menu/page-not-found/page-not-found.component';
import { AuthGuard } from './service/auth-guard.service';

const routes: Routes = [
  { path: 'channel', component: ChannelComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomepageComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
