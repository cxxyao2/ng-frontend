import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Order } from '../Order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  configUrl = 'http://localhost:5000/api' + '/orders';

  constructor(private http: HttpClient) {}

  getOrder(id: string): Observable<Order> {
    const url = `${this.configUrl}/${id}`; // DELETE api/heroes/42
    return this.http.get<Order>(url); // TODO handle Error
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.configUrl);
  }

  addOrder(order: Order) {
    // name ,categoryId='600103a5ffa4a7376471d64f'
    // code ?
    return this.http.post(this.configUrl, order);
  }

  // TODO ERROR PROCESS
}
