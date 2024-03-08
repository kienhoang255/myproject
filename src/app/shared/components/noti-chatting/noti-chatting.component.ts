import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-noti-chatting',
  templateUrl: './noti-chatting.component.html',
  styleUrls: ['./noti-chatting.component.css'],
})
export class NotiChattingComponent implements OnInit, OnChanges {
  @Input() isChatting!: string;
  isTyping: boolean = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isChatting'].currentValue.trim()) {
      this.isTyping = true;
    } else this.isTyping = false;
  }

  ngOnInit(): void { }
}
