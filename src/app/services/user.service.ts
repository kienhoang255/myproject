import { Injectable } from '@angular/core';
import { data } from '../data';
import { CreateUser, User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}
  private readonly url = 'https://jsonplaceholder.typicode.com/';

  createUser(user: CreateUser) {
    if (!this.checkUser(user)) {
      this.httpClient.post<User>(`${this.url}users`, user).subscribe((sub) => {
        data.user.push(sub);
      });
    }
  }

  checkUser(user: CreateUser) {
    return data.user.find((u) => u.username === user.username);
  }
}
