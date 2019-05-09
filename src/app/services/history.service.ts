import { Injectable } from '@angular/core';
import {Page} from "../types";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  pageHistory : Page[] = [];
  constructor() { }

  public push(page: Page): void {
    this.pageHistory.push(page)
  }

  public pop(): Page {
    return this.pageHistory.pop();
  }
}
