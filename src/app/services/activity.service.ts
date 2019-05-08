import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {ActivityItem, Page} from "../types";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private afs: AngularFirestore
  ) { }

  public getActivities(): Observable<ActivityItem[]> {
    return this.afs.collection<ActivityItem>('activities', ref => {
      return ref.orderBy('createdAt', 'desc')
    })
      .snapshotChanges()
      .pipe (
        map(actions  => {
          return _(actions)
            .map(this.mapActivities.bind(this))
            .value();
        })
      );
  }


  mapActivities(activity): ActivityItem {
    const doc = activity.payload.doc || activity.payload;

    const data = doc.data();
    const id = doc.id;
    const exists = doc.exists;

    return { id, exists, ...data };
  }

}
