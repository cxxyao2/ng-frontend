import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewcartComponent } from './cart/newcart/newcart.component';
import { ItemDetailsComponent } from './cart/item-details/item-details.component';
import { ItemListComponent } from './cart/item-list/item-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChannelComponent } from './admin/channel/channel.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'channel', component: ChannelComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'order', component: NewcartComponent },
  { path: 'item/:id', component: ItemDetailsComponent },
  { path: 'item-list', component: ItemListComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
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
