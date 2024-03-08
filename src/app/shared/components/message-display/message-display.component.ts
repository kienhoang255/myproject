import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css'],
})
export class MessageDisplayComponent implements OnInit {
  @Input() id: any;
  @Input() messageData!: Message[];
  @Input() isChatting!: string;

  constructor() {}

  ngOnInit(): void {}
}
