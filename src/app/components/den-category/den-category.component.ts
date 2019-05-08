import { Component, OnInit, Input } from '@angular/core';
import { Category, Item } from 'src/app/types';

@Component({
  selector: 'den-category',
  templateUrl: './den-category.component.html',
  styleUrls: ['./den-category.component.scss'],
})
export class DenCategoryComponent implements OnInit {

  @Input() category: Category;
  items: Item[];
  $items: any;
  constructor() { }

  ngOnInit() {}

}
