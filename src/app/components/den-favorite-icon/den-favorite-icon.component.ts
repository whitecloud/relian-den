import {Component, Input, OnInit} from '@angular/core';
import {Item, User} from "../../types";
import {ItemsService} from "../../services/items.service";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'den-favorite-icon',
  templateUrl: './den-favorite-icon.component.html',
  styleUrls: ['./den-favorite-icon.component.scss'],
})
export class DenFavoriteIconComponent implements OnInit {

  @Input() item: Item;

  constructor(
      private itemsService: ItemsService,
      private userService: UserService
  ) { }

  ngOnInit() {}

  toggleFavorite() {
    if (this.userService.user) {
      const userId = this.userService.user.id;

      if (this.isFavorite()) {
        this.item.favorites.splice(this.item.favorites.indexOf(userId), 1);
      } else {
        this.item.favorites.push(userId);
      }
      this.itemsService.updateItem({favorites: this.item.favorites}, this.item.id);
    }
  }

  isFavorite(): boolean {
    return this.item && this.userService.user && this.item.favorites.includes(this.userService.user.id);
  }
}
