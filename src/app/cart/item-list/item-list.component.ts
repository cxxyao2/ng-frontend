import {
  ChangeDetectorRef,
  Component,
  OnInit,
  AfterViewChecked,
} from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

import { CartService } from '../../service/cart.service';
import { Item } from '../../Item';
import { Order } from '../../Order';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit, AfterViewChecked {
  itemsInCart?: Item[];
  totalQty = 0;
  saveSucceedMessage = '';
  saveFailMessage = '';
  displayedColumns: string[] = ['select', 'id', 'name', 'quantity'];
  dataSource: any;
  selection = new SelectionModel<Item>(true, []);

  constructor(
    private cartSrv: CartService,
    private orderSrv: OrderService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cartSrv.getItems().subscribe((data) => {
      this.itemsInCart = data;
      this.dataSource = new MatTableDataSource<Item>(data);
      console.log('data is ', this.dataSource);
    });
  }

  /** Whether the number of selected elements matches the total number of rows */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row: Item) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Item): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.name
    }`;
  }

  ngAfterViewChecked() {
    this.calcTotalQty();
    this.cdRef.detectChanges();
  }

  calcTotalQty() {
    this.totalQty = this.selection.selected
      .map((item) => item.quantity)
      .reduce((acc, value) => acc + value, 0);
  }

  submit() {
    const customerId = this.cartSrv.client._id;
    const savedItem: Item[] = [];
    this.saveSucceedMessage = '';
    this.saveFailMessage = '';
    this.selection.selected.map((item) =>
      this.orderSrv
        .addOrder({
          customerId: customerId,
          productId: item.id,
          quantity: item.quantity,
          price: 10,
          coupon: 'aaaa',
        })
        .subscribe(
          (res) => {
            savedItem.push(item);
            this.cartSrv.deleteItem(item);
            if (savedItem.length === this.selection.selected.length) {
              this.cartSrv.clear();
              this.saveSucceedMessage = 'Data is saved successfully.';
            }
          },
          (err) => {
            this.saveFailMessage = 'Save failed.' + JSON.stringify(err);
          },
          () => console.log('HTTP request completed.')
        )
    );

    this.cartSrv.getItems().subscribe((data) => {
      this.itemsInCart = data;
      this.dataSource = new MatTableDataSource<Item>(data);
      console.log('data is ', this.dataSource);
    });
  }

  getLoadingMessage(): string {
    return this.saveSucceedMessage === ''
      ? 'Char is Loading...'
      : 'Char is empty.';
    // "aa"}}Loading items in cart...
  }
}
