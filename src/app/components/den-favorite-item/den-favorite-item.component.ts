import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../types";

@Component({
  selector: 'den-favorite-item',
  templateUrl: './den-favorite-item.component.html',
  styleUrls: ['./den-favorite-item.component.scss'],
})
export class DenFavoriteItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {}
}
