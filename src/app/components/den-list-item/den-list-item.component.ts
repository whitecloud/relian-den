import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../types';
import { HistoryService } from 'src/app/services/history.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'den-list-item',
  templateUrl: './den-list-item.component.html',
  styleUrls: ['./den-list-item.component.scss'],
})
export class DenListItemComponent implements OnInit {

  @Input() item: Item;

  constructor (
    public historyService: HistoryService,
    public pageService: PagesService
  ) { 
  }

  ngOnInit() {}

  itemClicked(item: Item) {
    switch (item.type) {
      case 'page':
        this.pageService.getPage(item.pageId).toPromise().then( page => {
          this.historyService.push(this.pageService.mapPages(page));
        });
        console.log('page item clicked');

        break;
      case 'detail': console.log('detail item clicked'); break;
      case 'link': window.open(item.url); break;
      default: console.log("no idea what was clicked: "); return;
    }
  }
}
