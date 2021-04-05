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
  // 1 根据产品ID,跳转到产品明细列表
  // 显示产品定期销量，更多信息
  // 2 考虑从服务器获取图片，懒加载
  ngOnInit(): void {
    console.log('hi,card item init');
  }

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
