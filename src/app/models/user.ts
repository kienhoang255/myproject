import { FormControl } from '@angular/forms';

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface CreateUser {
  username: string;
  password: string;
}
