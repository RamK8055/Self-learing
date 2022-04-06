import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    //check token is valid or not (we can create new toket with js -> using console)
    // here check the token is valid or not (jwt with expiry- valid then return true,
    // else return false)
    // change this implementations
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'password') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Ram Kumar', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
