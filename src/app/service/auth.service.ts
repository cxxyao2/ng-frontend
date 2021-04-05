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

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'x-auth-token': JSON.stringify(localStorage.getItem('token')),
  //   }),
  // };

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    const url = this.configUrl + '/users';
    return this.http.post(url, user);
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

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
