import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  isHover: boolean = false;
  currentIdHover!: number;
  listPosts: Post[] = this.postService.listPosts;

  constructor(
    private readonly router: Router,
    private readonly postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.getPostList();
    this.listPosts = this.postService.listPosts;

    if (!this.listPosts)
      this.postService.listPosts$.subscribe((data) => {
        this.listPosts = data;
      });
  }

  handleToggleRead(id: number) {
    this.isHover = !this.isHover;
    this.currentIdHover = id;
  }

  readPost(id: number) {
    this.router.navigate(['/post/detail', id]);
  }
}
