import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Page } from '../types';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getPage(pageId: string): Observable<Page> {
    return this.afs.collection('pages').doc(pageId)
      .snapshotChanges()
      .pipe(map(this.mapPages.bind(this)));
  }

  getPages() {
    return this.afs.collection('pages')
    .snapshotChanges()
    .pipe (
      map(actions => {
        return _(actions)
          .map(this.mapPages.bind(this))
          .value();
      })
    );
  }

  mapPages(page) {
    const doc = page.payload.doc || page.payload;

    const data = doc.data();
    const id = doc.id;
    const exists = doc.exists;

    return { id, exists, ...data };
  }

  sanitize(incomingPage: Page): Page {
    let page = _.clone(incomingPage);
    return _.omit(page, ['exists', 'id']);
  }
}
