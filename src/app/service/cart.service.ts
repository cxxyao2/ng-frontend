import { Injectable } from '@angular/core';
import { Item } from '../Item';
import { Customer } from '../Customer';

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

  distributeItem(waitingItem: Item): void {
    const idx = this.items.findIndex((item) => item.id === waitingItem.id);
    if (idx >= 0) {
      if (waitingItem.quantity > 0) {
        this.update(idx, waitingItem);
      } else {
        this.delete(idx);
      }
    } else {
      this.add(waitingItem);
    }
  }

  add(item: Item): void {
    this.items.push(item);
  }

  delete(index: number): void {
    this.items.splice(index, 1);
  }

  update(index: number, updatedItem: Item): void {
    this.items[index].quantity = updatedItem.quantity;
  }

  getTotalQty(): number {
    let sumQty = 0;
    for (const item of this.items) {
      sumQty += item.quantity;
    }
    return sumQty;
  }

  clear(): void {
    this.items = [];
  }
}
