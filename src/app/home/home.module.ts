import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ComponentsModule } from '../components/components.module';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';
import { ProfilePopoverPage } from '../profile-popover/profile-popover.page';
import {SearchModalPage} from "../search-modal/search-modal.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    ComponentsModule
  ],
  entryComponents: [
    AddItemModalPage,
    ProfilePopoverPage,
    SearchModalPage
  ],
  declarations: [
    HomePage,
    AddItemModalPage,
    ProfilePopoverPage,
    SearchModalPage
  ]
})
export class HomePageModule {}
