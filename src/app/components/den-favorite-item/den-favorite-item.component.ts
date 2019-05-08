import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../types";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'den-favorite-item',
  templateUrl: './den-favorite-item.component.html',
  styleUrls: ['./den-favorite-item.component.scss'],
})
export class DenFavoriteItemComponent implements OnInit {

  @Input() item: Item;
  isFavorite: boolean;

  constructor(
      private itemsService: ItemsService
  ) { }

  ngOnInit() {}

  ngOnChanges(changes: any){
    if(this.item){
      if(this.item.favorites.includes("Matt")){
        this.isFavorite = true;
      } else {
        this.isFavorite = false;
      }
    }
  }
}
