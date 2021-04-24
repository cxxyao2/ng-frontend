import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { User } from '../User';
import jwt_decode from 'jwt-decode';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  configUrl = environment.apiUrl;
  tokenKey = 'token';
  currentUser: any;

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

  findUserByNameOrEmail(user: string): Observable<any> {
    const url = this.configUrl + '/users/unique';
    return this.http.post(url, { name: user });
  }

  setUserTheme(theme: number): void {
    if (theme === 1) {
      this.currentUser.theme = 'blue';
    } else {
      this.currentUser.theme = 'purple';
    }
  }

  login(email: string, password: string): Observable<any> {
    const url = this.configUrl + '/auth';
    console.log('environment apiUrl ', environment);
    console.log('details', url, 'email ', email, ' pass ', password);
    return this.http.post(
      url,
      {
        email,
        password,
      },
      { responseType: 'text' }
    );
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  loginWithJwt(jwt: string) {
    console.log('loginwithJwt ', jwt);
    localStorage.setItem(this.tokenKey, jwt);
    this.setCurrentUser();
  }

  setCurrentUser() {
    const jwt = localStorage.getItem(this.tokenKey);
    if (jwt && jwt.length >= 1) {
      try {
        this.currentUser = jwt_decode(jwt);
      } catch (error) {
        this.currentUser = null;
      }
    }
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    window.location.reload();
  }
}
