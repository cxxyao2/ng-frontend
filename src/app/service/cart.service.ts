import { Injectable } from '@angular/core';
import { Item } from '../Item';
import { Customer } from '../Customer';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Item[] = [];
  client: Customer = {
    _id: '',
    name: '',
    phone: '',
  };

  constructor() {}

  updateClient(selectedCustomer: Customer): void {
    this.client = selectedCustomer;
  }

  addItem(waitingItem: Item): void {
    const idx = this.items.findIndex((item) => item.id === waitingItem.id);
    if (idx >= 0) {
      if (waitingItem.quantity > 0) {
        this.items[idx].quantity = waitingItem.quantity;
      } else {
        this.items.splice(idx, 1);
      }
    } else {
      this.items.push(waitingItem);
    }
  }

  deleteItem(waitingItem: Item): void {
    const idx = this.items.findIndex((item) => item.id === waitingItem.id);
    if (idx >= 0) {
      this.items.splice(idx, 1);
    }
  }

  updateItem(waitingItem: Item): void {
    const idx = this.items.findIndex((item) => item.id === waitingItem.id);
    if (idx >= 0) {
      this.items[idx].quantity = waitingItem.quantity;
    }
  }

  getTotalQty(): number {
    return this.items
      .map((item) => item.quantity)
      .reduce((acc, value) => acc + value, 0);
  }

  getItems() {
    return of(this.items).pipe(delay(2000));
  }

  clear(): void {
    this.items = [];
  }
}
