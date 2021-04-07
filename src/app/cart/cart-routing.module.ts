import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NewCartComponent } from './newcart/newcart.component';
import { AuthGuard } from '../service/auth-guard.service';

const cartRoutes: Routes = [
  { path: 'order', component: NewCartComponent, canActivate: [AuthGuard] },
  { path: 'item/:id', component: ItemDetailsComponent },
  { path: 'item-list', component: ItemListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cartRoutes)],

  providers: [AuthGuard],
  exports: [RouterModule],
})
export class CartRoutingModule {}
