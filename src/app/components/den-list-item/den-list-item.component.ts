import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../types";

@Component({
  selector: 'den-list-item',
  templateUrl: './den-list-item.component.html',
  styleUrls: ['./den-list-item.component.scss'],
})
export class DenListItemComponent implements OnInit {

  @Input()
  item: Item;

  constructor() { }

  ngOnInit() {}

  itemClicked(item: Item) {
    console.log(item);
    switch (item.type) {
      case 'page': console.log('page item clicked'); return;
      case 'detail': console.log('detail item clicked'); break;
      case 'link': window.open(item.url); break;;
      default: console.log("no idea what was clicked: "); return;
    }

  }

}
