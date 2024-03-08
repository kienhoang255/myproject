import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  messageDataSub = new BehaviorSubject<Message[]>([]);
  messageData$ = this.messageDataSub.asObservable();

  constructor() { }

  handleSendMessage(mes: Message): void {
    this.addMessage(mes)
  }

  handleOnSendIcon(mes: Message) {
    this.addMessage(mes)
  }

  private addMessage(mes: Message) {
    let tempMess: Message[] = [];
    this.messageData$.subscribe((message) => {
      tempMess = message;
    });
    tempMess = [...tempMess, mes];
    this.messageDataSub.next(tempMess);
  }
}
