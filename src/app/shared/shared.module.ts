import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatUsernamePipe } from './pipes/format-username.pipe';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { MessengerComponent } from './components/messenger/messenger.component';
import { FormsModule } from '@angular/forms';
import { MessageDisplayComponent } from './components/message-display/message-display.component';

import { MatIconModule } from '@angular/material/icon';
import { NotiChattingComponent } from './components/noti-chatting/noti-chatting.component';

@NgModule({
  declarations: [
    FormatUsernamePipe,
    ShortenTextPipe,
    MessengerComponent,
    MessageDisplayComponent,
    NotiChattingComponent,
  ],
  imports: [CommonModule, FormsModule, MatIconModule],
  exports: [
    FormatUsernamePipe,
    ShortenTextPipe,
    MessengerComponent,
    MessageDisplayComponent,
  ],
})
export class SharedModule {}
