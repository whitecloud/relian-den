import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Item } from '../types';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { ModalController } from '@ionic/angular';

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
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  setSearchViewItems($event) {
    const text = $event.detail.value;
    if (this.$subscription) {
      this.$subscription.unsubscribe();
    }
    if (!text) {
      this.searchViewItems = [];
    } else {
      this.$subscription = this.searchService.findItems($event.detail.value).subscribe(items => {
        this.searchViewItems = items;
      });
    }
  }

  itemClicked(searchItem) {
    if (['page','detail'].includes(searchItem.item.type)) {
      this.modalCtrl.dismiss();
    }
  }

}
