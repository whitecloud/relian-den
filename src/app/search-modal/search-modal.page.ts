import { Component, OnInit } from '@angular/core';
import {SearchService} from "../services/search.service";
import {Item} from "../types";
import {map} from "rxjs/operators";
import * as _ from "lodash";
import {ItemsService} from "../services/items.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.page.html',
  styleUrls: ['./search-modal.page.scss'],
})
export class SearchModalPage implements OnInit {

  searchViewItems : Item[];
  $subscription: Subscription;

  constructor(
    public searchService: SearchService,
    private itemService: ItemsService
  ) { }

  ngOnInit() {
  }

  setSearchViewItems($event) {
    const text = $event.detail.value;
    if(this.$subscription) this.$subscription.unsubscribe();
    if(!text) {
      this.searchViewItems=[]
    } else {
      this.$subscription = this.searchService.findItems($event.detail.value).subscribe(items => {
        this.searchViewItems = items;
      });
    }
  }

}
