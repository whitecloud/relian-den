import { Component } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { Page } from '../types';
import { ModalController } from '@ionic/angular';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  $pages: any;
  currentPage: Page;

  constructor(
    private pagesService: PagesService,
    private modalController: ModalController
  ) {
    // set the current page to the home page when we start
    this.$pages = this.pagesService.getPage('home').subscribe(homePage => {
      this.currentPage = homePage;
    });
  }

  /**
   * Open the modal where you can add items to this page
   * Pass the current page so that it knows 
   */
  async openAddModal() {
    const modal = await this.modalController.create({
      component: AddItemModalPage,
      componentProps: {
        currentPage: this.currentPage
      }
    });

    modal.present();
  }

}
