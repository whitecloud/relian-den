import { Component } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { Page } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  $pages: any;
  currentPage: Page;

  constructor(
    private pagesService: PagesService
  ) {
    // set the current page to the home page when we start
    this.$pages = this.pagesService.getPage('home').subscribe(homePage => {
      this.currentPage = homePage;
      console.log(homePage);
    });
  }

}
