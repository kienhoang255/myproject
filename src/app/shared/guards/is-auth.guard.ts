import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard implements CanLoad {
  constructor(private readonly authService: AuthService) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.isAuth$();
  }

  private isAuth$() {
    return !this.authService.isLogin;
  }
}
