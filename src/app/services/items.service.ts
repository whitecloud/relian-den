import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Item } from '../types';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { PagesService } from "./pages.service";
import { HistoryService } from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private afs: AngularFirestore,
    private userService: UserService,
    private pageService: PagesService,
    private historyService: HistoryService
  ) { 
  }

  addItem(item: any) {
    item.createdAt = Date.now();
    item.createdBy = this.userService.user;

    return this.afs.collection('items').add(item);
  }

  updateItem(partialItem: any, itemId: string) {
    return this.afs.collection('items').doc(itemId).update(partialItem);
  }

  getItem(itemId: string): Observable<Item> {
    return this.afs.collection('items').doc(itemId)
      .snapshotChanges()
      .pipe(map(this.mapItems.bind(this)));
  }

  getItems(categoryId): Observable<Item[]> {
    return this.afs.collection('items', ref => {
      return ref.where('categoryId', '==', categoryId);
    })
      .snapshotChanges()
      .pipe (
        map(actions => {
          return _(actions)
            .map(this.mapItems.bind(this))
            .value();
        })
      );
  }

  getFavoriteItems(userId): Observable<Item[]> {
    return this.afs.collection('items', ref => {
      return ref.where('favorites', 'array-contains', userId);
    })
        .snapshotChanges()
        .pipe (
            map(actions => {
              return _(actions)
                  .map(this.mapItems.bind(this))
                  .value();
            })
        );
  }

  mapItems(item): Item {
    const doc = item.payload.doc || item.payload;

    const data = doc.data();
    const id = doc.id;
    const exists = doc.exists;

    return { id, exists, ...data };
  }

  sanitize(incomingItem: Item): Item {
    let item = _.clone(incomingItem);
    return _.omit(item, ['exists', 'id']) as Item;
  }

  handleClick(item: Item) {
    switch (item.type) {
      case 'page':
        this.historyService.push({title: item.title, pageId: item.pageId});
        console.log('page item clicked');

        break;
      case 'detail': console.log('detail item clicked'); break;
      case 'link': window.open(item.url); break;
      default: console.log("no idea what was clicked: "); return;
    }

  }
}
