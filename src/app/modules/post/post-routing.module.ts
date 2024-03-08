import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostGuard } from 'src/app/shared/guards/post.guard';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { PostPermissionGuard } from 'src/app/shared/guards/post-permission.guard';
import { PostDeactivateGuard } from 'src/app/shared/guards/post-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PostComponent, canActivate: [PostGuard] },
      { path: 'detail/:slug', component: DetailComponent },
      {
        path: 'edit/:slug',
        component: EditComponent,
        canActivate: [PostPermissionGuard],
        canDeactivate: [PostDeactivateGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule { }
