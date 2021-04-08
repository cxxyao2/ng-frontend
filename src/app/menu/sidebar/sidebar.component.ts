import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  Output,
  ViewChild,
  EventEmitter,
  AfterViewChecked,
} from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';

import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewChecked {
  @Output() close: EventEmitter<any> = new EventEmitter();
  @ViewChild('drawer') drawer?: MatDrawer;

  showFiller = false;
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngAfterViewChecked() {
    this.drawer?.toggle();
    this.cdRef.detectChanges();
  }

  closeSidebar() {
    this.drawer?.toggle();
    this.close.emit(true);
  }
}
