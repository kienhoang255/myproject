import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css'],
})
export class MessengerComponent implements OnInit {
  hideBox: boolean = true;
  onFocus: boolean = false;
  @Input() text: any = '';
  @Input() username: string = 'username';
  @Input() messageData!: Message[];
  @Input() id: any;

  @Output() message = new EventEmitter();
  @Output() messageIcon = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClickSend() {
    if (this.text) {
      this.message.emit({
        username: this.username,
        message: this.text.trim(),
        dateTime: new Date(),
      });
      this.text = ""
    } else {
      this.message.emit({
        username: this.username,
        icon: 'thumb_up',
        dateTime: new Date(),
      });
    }
  }

  toggleBoxMessage() {
    this.hideBox = !this.hideBox;
  }

  toggleFocus() {
    this.onFocus = !this.onFocus;
  }
}
