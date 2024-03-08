import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly router: Router) {
    if (!this.isLogin) {
      this.checkLogin();
    }
  }

  // isLogin: boolean = localStorage.getItem('username') ? true : false;
  isLogin: boolean = false;
  userInfo!: User;

  isLoggedIn$ = new BehaviorSubject<boolean>(
    localStorage.getItem('username') ? true : false
  );

  login(user: User) {
    this.saveUserLS(user);
    this.userInfo = user;
    this.isLogin = true;
    this.isLoggedIn$.next(true);
    this.router.navigate(['/home']);
  }

  checkLogin() {
    const user = this.getUserLS();
    if (user) {
      this.userInfo = user;
      this.isLoggedIn$.next(true);
      this.isLogin = true;
    }
  }

  logout() {
    localStorage.removeItem('username');
    this.isLogin = false;
    this.isLoggedIn$.next(false);
    this.router.navigate(['/login']);
  }

  saveUserLS(user: User) {
    localStorage.setItem('username', JSON.stringify(user));
  }

  getUserLS() {
    let receiver = localStorage.getItem('username');
    if (receiver) return JSON.parse(receiver);
    return false;
  }
}
