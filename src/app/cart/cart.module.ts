import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NewcartComponent } from './newcart/newcart.component';
import { MaterialCenterModule } from '../material-center.module';

@NgModule({
  declarations: [
    ItemCardComponent,
    ItemDetailsComponent,
    ItemListComponent,
    NewcartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialCenterModule,
    CartRoutingModule,
  ],
})
export class CartModule {}
