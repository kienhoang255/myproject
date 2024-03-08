import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostGuard } from './shared/guards/post.guard';
import { LayoutComponent } from './modules/layout/layout.component';
import { IsAuthGuard } from './shared/guards/is-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'post',
        loadChildren: () =>
          import('./modules/post/post.module').then((m) => m.PostModule),
        // canActivate: [PostGuard],
        canLoad: [PostGuard],
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    canLoad: [IsAuthGuard],
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    canLoad: [IsAuthGuard],
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
