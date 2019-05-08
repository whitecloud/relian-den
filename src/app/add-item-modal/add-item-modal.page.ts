import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.page.html',
  styleUrls: ['./add-item-modal.page.scss'],
})
export class AddItemModalPage implements OnInit {

  newItem: any = {};

  constructor() {
    this.newItem = {
      categoryId: '',
      title: '',
      type: 'link',
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

}
