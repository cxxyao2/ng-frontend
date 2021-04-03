import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../User';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  configUrl = 'http://localhost:5000/api';
  tokenKey = 'token';

  // TODO :interceptors 所有操作写本地log文件
  //

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': JSON.stringify(localStorage.getItem('token')),
    }),
  };

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    const url = this.configUrl + '/users';
    return this.http.post(url, user, this.httpOptions).pipe(
      tap((result) => console.log(`added user id=${result}`)),
      catchError(this.handleError('registerUser'))
    );
  }

  getUser(): Observable<User> {
    return of({ name: 'xx', phone: 'xx', email: 'xx' });
  }

  // TODO
  // getUsers()：Observable<User[]> {
  //   return of([{ name: 'xx', phone: 'xx', email: 'xx' }]);
  // }

  login(user: User) {
    const url = this.configUrl + '/users';
    let jwt = '';
    this.http.post(url, user).subscribe((data) => {
      jwt = JSON.stringify(data);
    });
    localStorage.setItem(this.tokenKey, jwt);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
