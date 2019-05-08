import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../types";

@Component({
  selector: 'den-favorite-item',
  templateUrl: './den-favorite-item.component.html',
  styleUrls: ['./den-favorite-item.component.scss'],
})
export class DenFavoriteItemComponent implements OnInit {

  //TODO this class is a dupe of den-item
  @Input() item: Item;

  constructor() { }

  ngOnInit() {}

  itemClicked(item: Item) {
    console.log(item);
    switch (item.type) {
      case 'page': console.log('page item clicked'); return;
      case 'detail': console.log('detail item clicked'); break;
      case 'link': window.open(item.url); break;
      default: console.log("no idea what was clicked: "); return;
    }


  }
}
