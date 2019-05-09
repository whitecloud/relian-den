import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../types";
import {ItemsService} from "../../services/items.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'den-favorite-icon',
  templateUrl: './den-favorite-icon.component.html',
  styleUrls: ['./den-favorite-icon.component.scss'],
})
export class DenFavoriteIconComponent implements OnInit {

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
