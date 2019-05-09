import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../types";
import {HistoryService} from "../../services/history.service";
import {PagesService} from "../../services/pages.service";

@Component({
  selector: 'den-favorite-item',
  templateUrl: './den-favorite-item.component.html',
  styleUrls: ['./den-favorite-item.component.scss'],
})
export class DenFavoriteItemComponent implements OnInit {

  //TODO this class is a dupe of den-item
  @Input() item: Item;

  constructor(
    public historyService: HistoryService,
    public pageService: PagesService) { }

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
