import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './menu/homepage/homepage.component';
import { ChannelComponent } from './channel/channel.component';

import { PageNotFoundComponent } from './menu/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'channel', component: ChannelComponent },
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
  exports: [RouterModule],
})
export class AppRoutingModule {}
