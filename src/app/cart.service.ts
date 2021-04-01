import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Item } from './Item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Item[] = [{ id: 'aa', name: 'aa', quantity: 11 }];
  constructor() {}

  add(item: Item): void {
    this.items.push(item);
  }

  delete(deletedItem: Item): void {
    const idx = this.items.indexOf(deletedItem);
    if (idx >= 0) {
      this.items.splice(idx, 1);
    }
  }

  update(updatedItem: Item): void {
    const idx = this.items.findIndex((item) => item.id === updatedItem.id);
    if (idx >= 0) {
      this.items[idx].quantity = updatedItem.quantity;
    }
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
