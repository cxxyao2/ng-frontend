import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../Product';
import { Item } from '../../Item';

import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() product!: Product;
  quantity = 0;

  constructor(private cartService: CartService) {}

  // TODO:
  // 1 ADD SALES DATA
  // 2 GET IMAGES FROM REMOTE SERVER, LAZY LOADING
  ngOnInit(): void {}

  setInitQty(): void {
    this.quantity = 1;
    const changedItem = {
      id: this.product._id,
      name: this.product.name,
      quantity: this.quantity,
    };
    this.cartService.addItem(changedItem);
  }

  onChangeQty($event: any): void {
    if ($event.target.value) {
      const parsed = parseInt($event.target.value, 10);
      const qty = isNaN(parsed) ? 0 : parsed;
      this.quantity = qty;
    } else {
      this.quantity = 0;
    }
    const changedItem = {
      id: this.product._id,
      name: this.product.name,
      quantity: this.quantity,
    };
    this.cartService.addItem(changedItem);
  }
}
