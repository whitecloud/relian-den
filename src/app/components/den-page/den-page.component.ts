import { Component, OnInit, Input } from '@angular/core';
import { Category, Page } from 'src/app/types';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'den-page',
  templateUrl: './den-page.component.html',
  styleUrls: ['./den-page.component.scss'],
})
export class DenPageComponent implements OnInit {

  @Input() page: Page;
  categories: Category[];
  $categories: any;

  constructor(
    private categoryService: CategoriesService
  ) { }

  ngOnInit() {}
  
  ngOnChanges() {
    if(this.page && this.page.id) {
      if(this.$categories) this.$categories.unsubscribe();
      this.$categories = this.categoryService.getCategories(this.page.id).subscribe(pageCategories => {
        this.categories = pageCategories;
      });
    }
  }
}
