import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../../services/post.service';
import { Post } from 'src/app/models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  detail: Post = this.postService.selectedPost;

  constructor(
    private readonly postService: PostService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  handleOnSave() {
    this.postService.updatePost(this.detail);
    // this.backToDetail()
  }

  handleOnBack() {
    this.backToDetail()
  }

  handleOnCancel() {
    this.postService.selectedPost$.subscribe((data: any) => {
      this.detail = data
      this.postService.selectedPost = data
    })
    this.backToDetail()
  }

  checkPostExists() { }

  backToDetail() {
    this.activatedRoute.params.subscribe((params) => {
      this.router.navigate(['/post/detail', params['slug']]);
    });
  }
}
