import { Component, OnInit, Input, Output } from '@angular/core';
import { Item } from '../../Item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() product!: Item;
  quantity = 0;

  constructor() {}

  // TODO:
  // 1 根据产品ID,跳转到产品明细列表
  // 显示产品定期销量，更多信息
  // 2 考虑从服务器获取图片，懒加载
  ngOnInit(): void {}

  onChangeQty($event: any) {
    console.log('value is ', $event.target.value);
  }
}
