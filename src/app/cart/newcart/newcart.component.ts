import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';
import { CartService } from '../../cart.service';

@Component({
  selector: 'new-cart',
  templateUrl: './newcart.component.html',
  styleUrls: ['./newcart.component.scss'],
})
export class NewcartComponent implements OnInit {
  item: Item = {
    id: 'a01',
    name: 'a01',
    quantity: 12,
    imageUrl: '../../../assets/motor1.jpg',
  };

  itemList: Item[] = [
    {
      id: 'a02',
      name: 'a02',
      quantity: 13,
      imageUrl: '../../../assets/motor2.jpg',
    },
    {
      id: 'a03',
      name: 'a03',
      quantity: 12,
      imageUrl: '../../../assets/motor3.jpg',
    },
    {
      id: 'a04',
      name: 'a04',
      quantity: 22,
      imageUrl: '../../../assets/motor4.jpg',
    },
  ];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  submit($event: any): void {
    console.log('form is submitted');
    console.log($event);
  }

  addItem(): void {
    const item: Item = {
      id: 'car3',
      name: 'car3',
      quantity: 33,
    };
    this.cartService.add(item);
  }
}
