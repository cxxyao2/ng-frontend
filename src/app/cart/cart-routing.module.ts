import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NewcartComponent } from './newcart/newcart.component';

const cartRoutes: Routes = [
  { path: 'order', component: NewcartComponent },
  { path: 'item/:itemId', component: ItemDetailsComponent },
  { path: 'item-list', component: ItemListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cartRoutes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
