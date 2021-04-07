import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Order } from '../Order';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  configUrl = environment.apiUrl + '/orders';

  constructor(private http: HttpClient) {}

  getOrder(id: string): Observable<Order> {
    const url = `${this.configUrl}/${id}`; // DELETE api/heroes/42
    return this.http.get<Order>(url);
  }

  getOrders(): Observable<Order[]> {
    return this.http
      .get<Order[]>(this.configUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  addOrder(order: any) {
    // name ,categoryId='600103a5ffa4a7376471d64f'
    // code ?
    return this.http.post(this.configUrl, order).pipe(
      retry(1),
      catchError((err: any, caught: Observable<any>) => {
        return throwError(this.handleError(err, caught));
      })
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError(error: any, caught: Observable<any>): Observable<any> {
    console.log('error caught: ', error);
    if (
      error &&
      error.error &&
      (error.error.status === 'INVALID_TOKEN' ||
        error.error.status === 'MAX_TOKEN_ISSUE_REACHED')
    ) {
      console.log('token has expired');
      // this.logout(); this.router.navigate(['/login'])
      return error;
    }
    return error;
  }
}
