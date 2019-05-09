import { Component } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';
import { ProfilePopoverPage } from '../profile-popover/profile-popover.page';
import { UserService } from '../services/user.service';
import {HistoryService} from "../services/history.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  $pages: any;

  tabs = [
    {
      title: 'Favorites',
      icon: 'md-heart',
      activeColor: '#ff4d4d',
      active: false
    },
    {
      title: 'Home',
      icon: 'md-home',
      activeColor: '#f8b102',
      active: true
    },
    {
      title: 'Activity',
      icon: 'md-time',
      activeColor: '#0098ff',
      active: false
    }
  ];

  constructor(
    public  historyService: HistoryService,
    private pagesService: PagesService,
    private modalController: ModalController,
    private popoverController: PopoverController,
    private userService: UserService
  ) {
  }

  /**
   * Open the modal where you can add items to this page
   * Pass the current page so that it knows 
   */
  async openAddModal() {
    const modal = await this.modalController.create({
      component: AddItemModalPage,
      componentProps: {
        currentPage: this.historyService.currentPage
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

  openSearchModal(){
    console.log("search modal button clicked")
  }
}
