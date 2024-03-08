import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  post$ = this.postService.selectedPost$;
  author$ = this.postService.postAuthor$;

  user = this.authService.userInfo;

  detail!: Post | undefined;
  author!: User | any;

  postSub: any;
  authorSub: any;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly postService: PostService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.postService.getSelectedPost(params['slug']);
    });

    this.postSub = this.post$.subscribe((params) => {
      this.detail = params;
      if (params)
        this.postService.fetchPostAuthor(params.userId);
    });

    this.authorSub = this.author$.subscribe((params) => {
      this.author = params;
    });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
    this.authorSub.unsubscribe();
  }

  directToEditPost(id: any) {
    this.router.navigate(['/post/edit', id]);
  }
}
