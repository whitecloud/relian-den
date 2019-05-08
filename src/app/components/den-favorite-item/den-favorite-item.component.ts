import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../types';
import {ItemsService} from '../../services/items.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'den-favorite-item',
  templateUrl: './den-favorite-item.component.html',
  styleUrls: ['./den-favorite-item.component.scss'],
})
export class DenFavoriteItemComponent implements OnInit {

  @Input() item: Item;
  isFavorite: boolean;

  constructor(
    private itemsService: ItemsService,
    private userService: UserService
  ) { }

  ngOnInit() {}

  toggleFavorite() {
    if (this.userService.user) {
      const userId = this.userService.user.id;

      if (this.isFavorite) {
        this.item.favorites.splice(this.item.favorites.indexOf(userId), 1);
      } else {
        this.item.favorites.push(userId);
      }
      this.itemsService.updateItem({favorites: this.item.favorites}, this.item.id);
    }
  }

  ngOnChanges(changes: any){
    if (this.item && this.userService.user) {
      const userId = this.userService.user.id;

      if(this.item.favorites.includes(userId)) {
        this.isFavorite = true;
      } else {
        this.isFavorite = false;
      }
    }
  }
}
