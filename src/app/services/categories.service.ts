import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Category } from '../types';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getCategory(categoryId: string): Observable<Category> {
    return this.afs.collection('categories').doc(categoryId)
      .snapshotChanges()
      .pipe(map(this.mapCategories.bind(this)));
  }

  getCategories(): Observable<Category[]> {
    return this.afs.collection('categories')
      .snapshotChanges()
      .pipe (
        map(actions => {
          return _(actions)
            .map(this.mapCategories.bind(this))
            .value();
        })
      );
  }

  addCategory(category){
    category.createdAt = Date.now();
    category.createdBy = 'MATTHEW THOMAS TAYLOR TROLL';
    return this.afs.collection('categories').add(category);
  }

  mapCategories(category): Category {
    const doc = category.payload.doc || category.payload;

    const data = doc.data();
    const id = doc.id;
    const exists = doc.exists;

    return { id, exists, ...data };
  }

  sanitize(incomingCategory: Category): Category {
    let category = _.clone(incomingCategory);
    return _.omit(category, ['exists', 'id']) as Category;
  }
}