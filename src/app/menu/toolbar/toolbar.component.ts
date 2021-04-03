import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  sideBarCollapsed = true;
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}

  showSideBar() {
    console.log('clicked');
    this.sideBarCollapsed = !this.sideBarCollapsed;
  }
}
