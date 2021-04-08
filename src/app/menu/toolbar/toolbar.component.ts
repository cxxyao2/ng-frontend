import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  sideBarCollapsed = true;
  constructor(
    public cartService: CartService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    if (!this.authService.currentUser) {
      this.authService.setCurrentUser();
    }
  }
  showSideBar() {
    console.log('clicked');
    this.sideBarCollapsed = !this.sideBarCollapsed;
  }

  onCloseSideBar($event: any) {
    console.log('sidebar event', $event);
    this.sideBarCollapsed = true; // not show
  }
}
