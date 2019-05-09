import { Component, OnInit } from '@angular/core';
import { HistoryService } from "../../services/history.service";
import {Item} from "../../types";

@Component({
  selector: 'den-breadcrumb',
  templateUrl: './den-breadcrumb.component.html',
  styleUrls: ['./den-breadcrumb.component.scss'],
})
export class DenBreadcrumbComponent implements OnInit {

  constructor(
    public historyService: HistoryService
  ) { }

  ngOnInit() {}

  itemClicked(item) {
    if (this.historyService.currentPage.id !== item.pageId) {
      this.historyService.popUntil(item);
    }
  }
}
