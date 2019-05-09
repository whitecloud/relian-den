import { Component, OnInit } from '@angular/core';
import {Item} from "../types";
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../services/items.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: string;
  item: Item;
  $item: any;

  constructor(
      private route: ActivatedRoute,
      private itemsService: ItemsService,
      private userService: UserService
  ) {
    const sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      sub.unsubscribe();
      this.getItem();
    });
  }


  ngOnInit() {
  }

  getItem(){
    if(this.id){
      if(this.$item) this.$item.unsubscribe();
      this.$item = this.itemsService.getItem(this.id).subscribe( itm => {
        this.item = itm;
      })
    }
  }

  //Get a live update of change to item
  ngOnChanges(){
    this.getItem();
  }

}
