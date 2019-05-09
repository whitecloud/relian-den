import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {UserService} from "./user.service";
import {Item, Message} from "../types";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
      private afs: AngularFirestore,
      private userService: UserService
  ) { }

    addMessage(messageText: string, itemId){
        const message: any = {
            createdAt: Date.now(),
            createBy: this.userService.user,
            userName: this.userService.getUser().name,
            text: messageText
        }
        return this.afs.collection('items').doc(itemId)
            .collection('messages')
            .add(message);
    }

    getMessages(id: string): Observable<Message[]>{
      return this.afs.collection('items').doc(id)
          .collection('messages')
          .snapshotChanges()
          .pipe(
              map( actions => {
                  return _(actions)
                      .map(this.mapItems.bind(this))
                      .value();
              })
          );
    }

    mapItems(message): Message {
        const doc = message.payload.doc || message.payload;

        const data = doc.data();
        const id = doc.id;
        const exists = doc.exists;

        return { id, exists, ...data };
    }
}
