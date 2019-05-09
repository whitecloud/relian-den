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
      private userService: UserService,
      private messagesService: MessagesService
  ) {
    const sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      sub.unsubscribe();
    });
    this.getItem();
    this.newMessage = '';
  }


  ngOnInit() {
  }

  clearMessage(){
      this.newMessage = '';

  }
  getItem(){
  console.log(this.id);
    if(this.id){
      if(this.$item) this.$item.unsubscribe();
      this.$item = this.itemsService.getItem(this.id).subscribe( itm => {
        this.item = itm;
      })
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

  //Get a live update of change to item ( not that that can happen right now...) and messages
  ngOnChanges(){
      console.log(this.id);
    this.getItem();
    if(this.id){
        if(this.$messages) this.$messages.unsubscribe();
        this.$messages = this.messagesService.getMessages(this.item.id).subscribe( msgs => {
            this.messages = msgs;
        })
    }
  }

}
