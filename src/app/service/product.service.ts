import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../Product';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  configUrl = 'http://localhost:5000/api' + '/products';
  // TODO HTTP
  constructor(private http: HttpClient) {}

  getProduct(id: string): Observable<Product> {
    const url = `${this.configUrl}/${id}`; // DELETE api/heroes/42
    return this.http.get<Product>(url); // TODO handle Error
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.configUrl);
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

  private handleError(error: HttpErrorResponse): Observable<Product> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
