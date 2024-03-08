import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'src/app/data';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  handleLogin(event: Event): void {
    data.user.map((u) => {
      const loginUsername = this.loginForm.value.username;
      const loginPassword = this.loginForm.value.password;
      if (u.username == loginUsername && u.password == loginPassword) {
        this.authService.login(u);
      }
    });
  }
}
