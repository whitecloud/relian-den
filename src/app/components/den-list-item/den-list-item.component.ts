import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../types';
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'den-list-item',
  templateUrl: './den-list-item.component.html',
  styleUrls: ['./den-list-item.component.scss'],
})
export class DenListItemComponent implements OnInit {

  @Input() item: Item;

  constructor (
    private itemService: ItemsService
  ) { 
  }

  ngOnInit() {}

  itemClicked(item: Item) {
   this.itemService.handleClick(item);
  }
}
