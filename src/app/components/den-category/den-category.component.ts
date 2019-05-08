import { Component, OnInit, Input } from '@angular/core';
import { Category, Item } from 'src/app/types';
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'den-category',
  templateUrl: './den-category.component.html',
  styleUrls: ['./den-category.component.scss'],
})
export class DenCategoryComponent implements OnInit {

  @Input() category: Category;
  items: Item[];
  $items: any;

  constructor(
      private itemsService: ItemsService
  ) { }

  ngOnInit() {}

  ngOnChanges(changes: any){
    if(this.category && this.category.id){
      if(this.$items) this.$items.unsubscribe();
      this.$items = this.itemsService.getItems(this.category.id).subscribe(categoryItems => {
        this.items = categoryItems;
      });
    }
  }
}
