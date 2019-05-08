import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.page.html',
  styleUrls: ['./add-item-modal.page.scss'],
})
export class AddItemModalPage implements OnInit {

  newItem: any = {};

  itemTypes = [
    {
      title: 'Page',
      description: 'Pages are similar to home for categorizing other...'
    },
    {
      title: 'Detail',
      description: 'Detail items are pages you can navigate to within the den where you can read a description and discuss the thing.'
    },
    {
      title: 'Link',
      description: 'Links will just open up a new tab when clicked to the url you provide.'
    }
  ]

  constructor() {
    this.newItem = {
      categoryId: '',
      title: '',
      type: this.itemTypes[2], // default to link
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
  }

  ngOnInit() {
  }

  selectType(type) {
    this.newItem.type = type;
  }

  addItem() {
    
  }

}
