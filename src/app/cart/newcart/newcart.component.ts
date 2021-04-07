import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { CartService } from '../../service/cart.service';
import { Item } from '../../Item';
import { Product } from '../../Product';
import { Category } from '../../Category';
import { Customer } from '../../Customer';

import { ProductService } from '../../service/product.service';
import { MatSelect } from '@angular/material/select';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'new-cart',
  templateUrl: './newcart.component.html',
  styleUrls: ['./newcart.component.scss'],
})
export class NewCartComponent implements OnInit, AfterViewInit {
  @ViewChild('matSelect') matSelect!: MatSelect;
  customerControl = new FormControl();
  errorMessage = '';
  initCustomer: Customer = {
    _id: '',
    name: '',
    phone: '',
    region: '',
  };
  enteredCustomer: Customer = { ...this.initCustomer };
  enteredCategoryId = '';
  enteredProductKey = '';

  filteredCustomers!: Observable<Customer[]>;
  products: Product[] = [];
  filterdProducts: Product[] = [];
  selectedProductId = '';
  customers: Customer[] = [];
  categories: Category[] = [];

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private productSer: ProductService
  ) {}

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.matSelect.valueChange.subscribe((value: string) => {
      this.enteredCategoryId = value;
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedProductId = params.get('id') || '';
    });
    this.productSer.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.productSer.getCustomers().subscribe((data) => {
      this.customers = data;
    });
    this.productSer.getCategories().subscribe((data) => {
      this.categories = data;
    });
    this.filteredCustomers = this.customerControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) =>
        name ? this._filterCustomers(name) : this.customers.slice()
      )
    );
    this.customerControl.valueChanges.subscribe((data) => {
      const cName = typeof data === 'string' ? data : data.name;
      const idx = this.customers.findIndex(
        (customer) => customer.name === cName
      );
      if (idx >= 0) {
        this.enteredCustomer = { ...this.customers[idx] };
      } else {
        this.enteredCustomer = {
          _id: '',
          name: '',
          phone: '',
          region: '',
        };
      }
    });
  }

  displayFn(customer: Customer): string {
    return customer && customer.name ? customer.name : '';
  }

  private _filterCustomers(value: string): Customer[] {
    const filterValue = this._normalizeValue(value);
    return this.customers.filter(
      (customer) =>
        this._normalizeValue(customer.name).indexOf(filterValue) === 0
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  changeProductKey(event: KeyboardEvent): void {
    const keys = (event.target as HTMLInputElement).value;
    this.enteredProductKey = keys;
  }

  submit(): void {
    this.errorMessage = '';
    if (!this.enteredCustomer.name) {
      this.errorMessage = 'Please enter a valid customer.';
      return;
    }

    if (!this.enteredCategoryId) {
      this.errorMessage = 'Please select a valid category.';
      return;
    }

    this.cartService.updateClient(this.enteredCustomer);

    this.filterdProducts = this.products.filter(
      (product) =>
        product.category === this.enteredCategoryId &&
        product.name.includes(this.enteredProductKey)
    );
  }
}
