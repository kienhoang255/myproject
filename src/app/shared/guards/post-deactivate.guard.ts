import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { EditComponent } from 'src/app/modules/post/components/edit/edit.component';
import { PostService } from 'src/app/services/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostDeactivateGuard implements CanDeactivate<EditComponent> {
  constructor(
    private readonly postService: PostService
  ) { }
  canDeactivate(component: EditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isDeactivated$()
  }

  private isDeactivated$() {
    let deactivate: boolean = false
    const selectedPost: any = this.postService.selectedPost

    this.postService.selectedPost$.subscribe((data: any) => {
      deactivate = JSON.stringify(data) == JSON.stringify(selectedPost)
    })

    return deactivate
  }


}
