import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../types";
import {ItemsService} from "../../services/items.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'den-favorites-list',
  templateUrl: './den-favorites-list.component.html',
  styleUrls: ['./den-favorites-list.component.scss'],
})
export class DenFavoritesListComponent implements OnInit {

  items: Item[];
  $items: any;

  constructor(
    private itemsService: ItemsService,
    private userService: UserService
  ) {
    //sub to favorites
    if ( this.userService.user) {
      const userId = this.userService.user.id;
      this.$items = this.itemsService.getFavoriteItems(userId).subscribe(favoriteItems => {
        this.items = favoriteItems;
      });
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if ( this.userService.user) {
      const userId = this.userService.user.id;
      if(this.$items) this.$items.unsubscribe();
      this.$items = this.itemsService.getFavoriteItems(userId).subscribe(favoriteItems => {
        this.items = favoriteItems;
      });
    }
  }

  reorderItem(event) {
    const itemToMove = this.items.splice(event.detail.from, 1)[0];
    this.items.splice(event.detail.to, 0, itemToMove);
    event.detail.complete();
  }
}
