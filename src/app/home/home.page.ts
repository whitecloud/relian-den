import { Component } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { Page } from '../types';
import { ModalController, PopoverController } from '@ionic/angular';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';
import { ProfilePopoverPage } from '../profile-popover/profile-popover.page';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  $pages: any;
  currentPage: Page;

  tabs = [
    {
      title: 'Favorites',
      icon: 'md-heart',
      active: false
    },
    {
      title: 'Home',
      icon: 'md-home',
      active: true
    },
    {
      title: 'Activity',
      icon: 'md-time',
      active: false
    }
  ]

  constructor(
    private pagesService: PagesService,
    private modalController: ModalController,
    private popoverController: PopoverController,
    private userService: UserService
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

  /**
   * Present the profile modal
   * @param ev 
   */
  async showProfilePopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  selectTab(tab) {
    for (const tab of this.tabs) {
      tab.active = false;
    }
    tab.active = true;
  }
}
