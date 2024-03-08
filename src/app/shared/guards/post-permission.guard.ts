import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Injectable({
  providedIn: 'root',
})
export class PostPermissionGuard implements CanActivate {
  author$ = this.postService.postAuthor$;
  // author!: User;
  user: User = this.authService.userInfo;

  constructor(
    private readonly authService: AuthService,
    private readonly postService: PostService,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.postService.author) {
      return this.router.navigate(['/post']);
    }
    return this.isPermission$();
  }

  private isPermission$() {
    const checkPer = this.postService.author.id == this.authService.userInfo.id;
    return checkPer;
  }
}
