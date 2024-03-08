import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  text = '';
  // messageData: Array<Message> = this.messengerService.message;
  messageData!: Array<Message>;

  constructor(private messengerService: MessengerService) { }

  ngOnInit(): void {
    this.messengerService.messageData$.subscribe(mes => this.messageData = mes)
  }

  onSendMessage(data: any) {
    if (data.message != "")
      this.messengerService.handleSendMessage(data);
  }

  onSendLike(data: any) {
    this.messengerService.handleOnSendIcon(data)
  }

}
