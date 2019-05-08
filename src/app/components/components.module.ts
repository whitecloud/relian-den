import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DenActivityItemComponent } from './den-activity-item/den-activity-item.component';
import { DenActivityListComponent } from './den-activity-list/den-activity-list.component';
import { DenBreadcrumbComponent } from './den-breadcrumb/den-breadcrumb.component';
import { DenCategoryComponent } from './den-category/den-category.component';
import { DenFavoriteIconComponent } from './den-favorite-icon/den-favorite-icon.component';
import { DenFavoriteItemComponent } from './den-favorite-item/den-favorite-item.component';
import { DenFavoritesListComponent } from './den-favorites-list/den-favorites-list.component';
import { DenItemComponent } from './den-item/den-item.component';
import { DenMessageComponent } from './den-message/den-message.component';
import { DenPageComponent } from './den-page/den-page.component';

@NgModule({
  declarations: [
    DenActivityItemComponent,
    DenActivityListComponent,
    DenBreadcrumbComponent,
    DenCategoryComponent,
    DenFavoriteIconComponent,
    DenFavoriteItemComponent,
    DenFavoritesListComponent,
    DenItemComponent,
    DenMessageComponent,
    DenPageComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    DenActivityItemComponent,
    DenActivityListComponent,
    DenBreadcrumbComponent,
    DenCategoryComponent,
    DenFavoriteIconComponent,
    DenFavoriteItemComponent,
    DenFavoritesListComponent,
    DenItemComponent,
    DenMessageComponent,
    DenPageComponent
  ]
})
export class ComponentsModule { }
