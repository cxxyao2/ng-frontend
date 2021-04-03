import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ProductService } from '../../service/product.service';

import { Item } from '../../Item';
import { Product } from '../../Product';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  product!: Product;
  id: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prodSrv: ProductService
  ) {}

  ngOnInit(): void {
    console.log('item-detail ngOnInit ');

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') || '';
      this.prodSrv
        .getProduct(this.id)
        .subscribe((data) => (this.product = data));
    });
  }

  //params  localhost:4200/heroes;id=15;foo=foo  or /heros/:id/:foo
  // not equals queryParams  localhost:4200/heroes?id=15;foo=foo
  gotoPlaceOrder() {
    const itemId = this.product ? this.product._id : null;
    this.router.navigate(['/order', { id: itemId, foo: 'only_for_fun_foo' }]);
  }
  //this.productService.getProduct(id)
  // .subscribe(data=>this.ddd= {id:(data as any).id,
  // name:(data as any).id});
}
