import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Message} from "../types";
import {map} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
      private afs: AngularFirestore
  ) { }

  getMessages(itemId): Observable<Message[]>{
    return this.afs.collection('items/messages', ref => {
      return ref.where('itemId', '==', itemId);
    })
        .snapshotChanges()
        .pipe (
            map(actions => {
              return _(actions)
                  .value();
            })
        );
  }
}
