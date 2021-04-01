import { Component, OnInit } from '@angular/core';
import { Route, ParamMap } from '@angular/router';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  itemId = 0;
  constructor() {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.itemId = +params.get('itemId');
    // });
  }
}
