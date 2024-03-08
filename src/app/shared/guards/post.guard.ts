import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, map, of, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PostGuard implements CanLoad, CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.isAuth$();
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.isAuth$();
  }

  private isAuth$() {
    return this.authService.isLoggedIn$.pipe(
      tap((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['/home']);
        }
      })
    );
  }
}
