import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../types";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'den-item',
  templateUrl: './den-item.component.html',
  styleUrls: ['./den-item.component.scss'],
})
export class DenItemComponent implements OnInit {

  @Input() item: Item;

  constructor(public itemService: ItemsService) { }

  ngOnInit() {}

  itemClicked(item: Item) {
    this.itemService.handleClick(item);
  }

}
