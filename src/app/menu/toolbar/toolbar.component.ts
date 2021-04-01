import { Component, OnInit } from '@angular/core';
import { CartService} from "../../cart.service";

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
}
