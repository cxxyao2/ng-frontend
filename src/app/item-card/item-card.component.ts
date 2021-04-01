import { Component, OnInit, Input, Output } from '@angular/core';
import {Item} from '../Item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() product: Item;
  quantity = 0;

  constructor() {}

  ngOnInit(): void {}

  onChangeQty($event: any) {
    console.log('value is ', $event.target.value);
  }
}
