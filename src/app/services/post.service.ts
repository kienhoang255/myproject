import { Injectable, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostService implements OnInit {
  private readonly url = 'https://jsonplaceholder.typicode.com/';

  listPosts!: Post[];
  listPostsSub = new BehaviorSubject<Post[]>([]);
  listPosts$ = this.listPostsSub.asObservable();

  selectedPost!: Post;
  selectedPostSub = new BehaviorSubject<Post | undefined>(undefined);
  selectedPost$ = this.selectedPostSub.asObservable();

  author!: User;
  postAuthorSub = new BehaviorSubject<User | undefined>(undefined);
  postAuthor$ = this.postAuthorSub.asObservable();

  constructor(private readonly httpClient: HttpClient, private readonly router: Router) { }
  ngOnInit() {

  }

  getPostList() {
    this.httpClient.get<Post[]>(`${this.url}posts`).subscribe((data) => {
      this.listPostsSub.next([...data]);
      this.listPosts = data;
    });

  }

  getSelectedPost(id: number) {
    this.httpClient.get<Post>(`${this.url}posts/${id}`).subscribe((data) => {
      this.selectedPostSub.next({ ...data });
      this.selectedPost = data;
    });
  }

  fetchPostAuthor(id: number) {
    this.httpClient.get<User>(`${this.url}users/${id}`).subscribe((data) => {
      this.postAuthorSub.next({ ...data });
      this.author = data;
    });
  }

  updatePost(post: Post) {
    this.httpClient
      .put<Post>(`${this.url}posts/${post.id}`, post)
      .subscribe((data) => {
        this.selectedPost = data;
        this.selectedPostSub.next({ ...data });
        this.router.navigate(['/post/detail', post.id])
      });
  }


}
