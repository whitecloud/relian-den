import { Injectable } from '@angular/core';
import { Item, Page } from "../types";
import { PagesService } from "./pages.service";
import { Subscription } from "rxjs";

export interface PageHistoryItem {
  title: string;
  pageId: string;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  currentPage: Page;
  pageHistory : PageHistoryItem[] = [];
  $page: Subscription;
  constructor(
    private pageService: PagesService
  ) {
    this.push({title: "Home", pageId: 'home'});
  }

  public push(page: PageHistoryItem): void {
    this.pageHistory.push(page);
    this.setPageFromId(page.pageId);
  }

  public pop(): void {
    const previousPageId = this.pageHistory[this.pageHistory.length-2].pageId;
    this.pageHistory.pop();
    this.setPageFromId(previousPageId);
  }

  public popUntil(item: PageHistoryItem): void {
    let deleteIndex = this.pageHistory.indexOf(item) + 1;
    this.pageHistory.splice(deleteIndex, this.pageHistory.length - deleteIndex);
    const previousPageId = this.pageHistory[this.pageHistory.length-1].pageId;
    this.setPageFromId(previousPageId);
  }

  setPageFromId(pageId: string) {
    this.$page = this.pageService.getPage(pageId).subscribe(page => {
      this.currentPage = page;
        this.$page.unsubscribe();
    });
  }

}
