import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  isShowMenu: boolean = false;
  isLogin = this.authService.isLogin;
  username: string = '';
  pos: any;

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  handleLogout() {
    this.authService.logout();
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.userInfo;
    user ? (this.username = user.username.toUpperCase()) : '';

    this.getPositionMenu();
  }

  getPositionMenu() {
    const ele = document.getElementById('test');
    const rect = ele?.getBoundingClientRect();

    this.pos = { y: rect?.top, x: rect?.left };
  }
}
