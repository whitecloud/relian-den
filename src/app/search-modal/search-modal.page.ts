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

  loading: boolean = false;
  emptyMessage: string = 'Find anything by searching above';
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
      this.emptyMessage = 'Find anything by searching above';
    } else {
      delete this.emptyMessage;
      this.loading = true;
      this.$subscription = this.searchService.findItems($event.detail.value).subscribe(items => {
        this.searchViewItems = items;
        if (items.length === 0) {
          this.emptyMessage = 'No items match your search';
        }
        this.loading = false;
      });
    }
  }

  itemClicked(searchItem) {
    if (['page','detail'].includes(searchItem.item.type)) {
      this.closeModal();
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
