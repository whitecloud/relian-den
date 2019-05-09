import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../services/items.service';
import * as _ from 'lodash';
import { CategoriesService } from '../services/categories.service';
import { NavParams, ModalController } from '@ionic/angular';
import { Page, Category } from '../types';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.page.html',
  styleUrls: ['./add-item-modal.page.scss'],
})
export class AddItemModalPage implements OnInit {

  currentPage: Page;
  newItem: any = {};

  sizes = ['large', 'small'];

  itemTypes = [
    {
      title: 'Link',
      description: 'Links will just open up a new tab when clicked to the url you provide.'
    },
    {
      title: 'Detail',
      description: 'Detail items are pages you can navigate to within the den where you can read more details.'
    },
    {
      title: 'Page',
      description: 'Pages are for grouping other categories of items. One page for each office at a company, for example.'
    },
  ]

  $categories: any;
  categories: Category[];

  constructor(
    private itemsService: ItemsService,
    private categoriesService: CategoriesService,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private pagesService: PagesService
  ) {
    this.newItem = {
      categoryId: '',
      title: '',
      type: this.itemTypes[0], // default to link
      size: 'small',
      iconUrl: '',

      // optional
      url: '',
      description: '',
      allowComments: true
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

  selectSize(size) {
    this.newItem.size = size;
  }

  selectCategory(category) {
    this.newItem.categoryId = category.id;
  }

  show(controlName) {
    switch(this.newItem.type.title) {
      case 'Link':
        return ['link'].includes(controlName);
      case 'Detail':
        return ['description'].includes(controlName);
      case 'Page':
        return [].includes(controlName);
      default:
        return false;
    }
  }

  canSave() {
    switch(this.newItem.type.title) {
      case 'Link':
        return this.hasRequired() &&
          this.newItem.url;
      case 'Detail':
        return this.hasRequired() &&
          this.newItem.description;
      case 'Page':
        return this.hasRequired();
      default:
        return false;
    }
  }

  hasRequired() {
    return this.newItem.categoryId &&
      this.newItem.title && 
      this.newItem.type && 
      this.newItem.size && 
      this.newItem.iconUrl;
  }

  async addItem() {
    let item: any = _.pick(this.newItem, ['categoryId', 'title', 'type', 'size', 'iconUrl']);
    item.type = item.type.title.toLowerCase();
    item.favorites = [];

    let pageId = item.title.toLowerCase().replace(/[^a-z]+/g, '');
    if (item.type === 'link') {
      item.url = this.newItem.url;
    }
    else if (item.type === 'detail') {
      item.description = this.newItem.description;
    }
    else if (item.type === 'page') {
      this.pagesService.addPage({
        id: pageId,
        title: item.title
      });
      item.pageId = pageId;
    }

    this.itemsService.addItem(item);
    this.$categories.unsubscribe();
    this.closeModal();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
