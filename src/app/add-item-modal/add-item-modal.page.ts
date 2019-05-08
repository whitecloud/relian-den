import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../services/items.service';
import * as _ from 'lodash';
import { CategoriesService } from '../services/categories.service';
import { NavParams } from '@ionic/angular';
import { Page, Category } from '../types';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.page.html',
  styleUrls: ['./add-item-modal.page.scss'],
})
export class AddItemModalPage implements OnInit {

  currentPage: Page;
  newItem: any = {};

  itemTypes = [
    {
      title: 'Link',
      description: 'Links will just open up a new tab when clicked to the url you provide.'
    },
    // {
    //   title: 'Detail',
    //   description: 'Detail items are pages you can navigate to within the den where you can read a description and discuss the thing.'
    // },
    // {
    //   title: 'Page',
    //   description: 'Pages are similar to home for categorizing other...'
    // },
  ]

  $categories: any;
  categories: Category[];

  constructor(
    private itemsService: ItemsService,
    private categoriesService: CategoriesService,
    private navParams: NavParams
  ) {
    this.newItem = {
      categoryId: '',
      title: '',
      type: this.itemTypes[0], // default to link
      size: 'small',
      iconUrl: '',
      favorites: [],

      // optional
      url: '',
      color: '',
      shortDescription: '',
      allowComments: true,
      longDescription: ''
    }

    this.currentPage = this.navParams.get('currentPage');
    this.$categories = this.categoriesService.getCategories(this.currentPage.id).subscribe(categories => {
      if (!this.newItem.categoryId && categories.length) {
        this.newItem.categoryId = categories[0].id;
      }
      this.categories = categories;
    });
  }

  ngOnInit() {
  }

  selectType(type) {
    this.newItem.type = type;
  }

  addItem() {
    let item = _.pick(this.newItem, ['categoryId', 'title', 'type', 'size', 'iconUrl', 'favorites']);
    item.type = item.type.title.toLowerCase();

    if (item.type === 'link') {
      item.url = this.newItem.url;
    }

    this.itemsService.addItem(item);
    this.$categories.unsubscribe();
  }

  selectCategory(category) {
    this.newItem.categoryId = category.id;
  }

}
