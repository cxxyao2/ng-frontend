import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../Product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Customer } from '../Customer';
import { Category } from '../Category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  configUrl = environment.apiUrl + '/products';
  // TODO HTTP
  constructor(private http: HttpClient) {}

  getProduct(id: string): Observable<Product> {
    const url = `${this.configUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.configUrl);
  }

  getCustomers(): Observable<Customer[]> {
    const url = environment.apiUrl + '/customers';
    return this.http.get<Customer[]>(url);
  }

  getCategories(): Observable<Category[]> {
    const url = environment.apiUrl + '/categories';
    return this.http.get<Category[]>(url);
  }

  addProduct() {
    // name ,categoryId='600103a5ffa4a7376471d64f'
    // code ?
    return this.http.post(this.configUrl, {
      name: 'engine oil chine',
      code: 'Z03',
      categoryId: '600103a5ffa4a7376471d64f',
    });
  }
}
