import { Component, OnInit } from '@angular/core';
import {ActivityService} from "../../services/activity.service";
import {ActivityItem} from "../../types";

@Component({
  selector: 'den-activity-list',
  templateUrl: './den-activity-list.component.html',
  styleUrls: ['./den-activity-list.component.scss'],
})
export class DenActivityListComponent implements OnInit {

  activityList: ActivityItem[] = [];

  constructor(
      public as : ActivityService
  )
  {
    this.as.getActivities().subscribe(list => {
    this.activityList = list;
    console.log(list);
  }
  );}

  ngOnInit() {}


}
