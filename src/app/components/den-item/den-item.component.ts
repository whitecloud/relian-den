import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../types";

@Component({
  selector: 'den-item',
  templateUrl: './den-item.component.html',
  styleUrls: ['./den-item.component.scss'],
})
export class DenItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {}

  itemClicked(item: Item) {
    switch (item.type) {
      case 'page': console.log('page item clicked'); return;
      case 'detail': console.log('detail item clicked'); break;
      case 'link': window.open(item.url); break;
      default: console.log("no idea what was clicked: "); return;
    }

  }

}
