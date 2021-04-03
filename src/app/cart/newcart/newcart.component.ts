import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';

import { CartService } from '../../service/cart.service';
import { Item } from '../../Item';
import { Product } from '../../Product';
import { Category } from '../../Category';
import { Customer } from '../../Customer';

import { ProductService } from '../../service/product.service';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'new-cart',
  templateUrl: './newcart.component.html',
  styleUrls: ['./newcart.component.scss'],
})
export class NewCartComponent implements OnInit {
  @ViewChild('matSelect') matSelect!: MatSelect;
  customerControl = new FormControl();
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
  customers: Customer[] = [
    {
      _id: '60503a4d93e7f9838333a4ff',
      name: 'rolling jack',
      phone: '12345678',
      region: 'Montreal',
    },
    {
      _id: '600348c1ffda942b5e855637',
      name: 'Mike jakshon',
      phone: '12345678',
      region: 'Montreal',
    },
    {
      _id: '5f9e3158ad9cfb1ef829357e',
      name: 'Jane ire',
      phone: '12345678',
      region: 'Montreal',
    },
  ];
  categories: Category[] = [
    { _id: '600103a5ffa4a7376471d64f', name: 'butane golden' },
    { _id: '60553ff93a84ce83f3ef5f51', name: 'butane silver' },
  ];

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private productSer: ProductService
  ) {}

  ngOnInit(): void {
    console.log('newcart ngOnInit ');

    this.route.paramMap.subscribe((params) => {
      this.selectedProductId = params.get('id') || '';
    });
    this.productSer.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.filteredCustomers = this.customerControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),

      map((name) =>
        name ? this._filterCustomers(name) : this.customers.slice()
      )
    );
  }

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe((value: string) => {
      this.enteredCategoryId = value;
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

  submit($event: any): void {
    this.filterdProducts = this.products.filter((product) => {
      product.category === this.enteredCategoryId &&
        product['name'].includes(this.enteredProductKey);
    });
    console.log('name', this.customerControl.value);

    console.log('form is submitted');
    console.log($event.target.value);
  }

  
}
