import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { AuthService } from '../../service/auth.service';
import { MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @ViewChild('theme') theme!: MatRadioGroup;
  panelOpenState = false;
  themeColor = '1';

  sideBarShow = false;
  showFiller = false;
  constructor(
    public cartService: CartService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    if (!this.authService.currentUser) {
      this.authService.setCurrentUser();
    }
  }
  showSideBar(): void {
    console.log('clicked');
    this.sideBarShow = true;
  }

  onCloseSideBar($event: any): void {
    console.log('sidebar event', $event);
    this.sideBarShow = true; // not show
  }

  selectColor($event: MouseEvent): void {
    $event.stopPropagation();
  }

  setColor($event: any): void {
    this.authService.setUserTheme($event);
    console.log('color is', $event);
  }
}
