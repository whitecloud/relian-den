import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../types';
import {ItemsService} from '../../services/items.service';

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

  toggleFavorite(){
    if(this.isFavorite){
     this.item.favorites.splice(this.item.favorites.indexOf('Matt'),1);
    } else {
      this.item.favorites.push('Matt');
    }
    this.itemsService.updateItem(this.item,this.item.id);
  }

  ngOnChanges(changes: any){
    if(this.item){
      if(this.item.favorites.includes('Matt')){
        this.isFavorite = true;
      } else {
        this.isFavorite = false;
      }
    }
  }
}
