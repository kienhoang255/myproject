import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailComponent, EditComponent],
  imports: [CommonModule, PostRoutingModule, SharedModule, FormsModule],
})
export class PostModule {}
