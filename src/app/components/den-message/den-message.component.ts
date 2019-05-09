import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../types";

@Component({
  selector: 'den-message',
  templateUrl: './den-message.component.html',
  styleUrls: ['./den-message.component.scss'],
})
export class DenMessageComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {}
}
