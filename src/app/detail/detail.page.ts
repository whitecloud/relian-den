import { Component, OnInit } from '@angular/core';
import {Item, Message} from "../types";
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../services/items.service";
import {UserService} from "../services/user.service";
import {MessagesService} from "../services/messages.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: string;
  item: Item;
  $item: any;
  newMessage: string;
  messages: Message[];
  $messages: any;

  constructor(
      private route: ActivatedRoute,
      private itemsService: ItemsService,
      private messagesService: MessagesService
  ) {
    const sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getItem();
      sub.unsubscribe();
    });
    this.newMessage = '';
  }


  ngOnInit() {
  }

  clearMessage(){
    this.newMessage = '';
  }

  getItem(){
    if (this.id) {
      // subscribe to the item
      if (this.$item) {
        this.$item.unsubscribe();
      }
      this.$item = this.itemsService.getItem(this.id).subscribe(item => {
        this.item = item;
      });

      // subscribe to its messages
      if (this.$messages) {
        this.$messages.unsubscribe();
      }
      this.$messages = this.messagesService.getMessages(this.id).subscribe(messages => {
        this.messages = messages;
      });
    }
  }

  addMessage(){
    console.log(this.newMessage);
    this.messagesService.addMessage(this.newMessage, this.id);
    this.clearMessage();
  }

  canAddMessage(){
     return this.newMessage.length > 1;
  }

}
