import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";
import { ItemsService } from "./items.service";
import * as _ from 'lodash';
import {Item} from "../types";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private afs: AngularFirestore,
              private itemsService: ItemsService) {
  }

  findItems(searchString): Observable<Item[]> {
    searchString = searchString.toLowerCase();
    return this.afs.collection('search', ref => {
      return ref.where('matches', 'array-contains', searchString);
    })
      .snapshotChanges()
      .pipe(
        map(actions => {
          return _(actions)
            .map(this.itemsService.mapItems.bind(this))
            .value();
        })
      );
  }

}