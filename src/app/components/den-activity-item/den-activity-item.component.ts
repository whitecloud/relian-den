import {Component, Input, OnInit} from '@angular/core';
import {ActivityItem} from "../../types";

@Component({
  selector: 'den-activity-item',
  templateUrl: './den-activity-item.component.html',
  styleUrls: ['./den-activity-item.component.scss'],
})
export class DenActivityItemComponent implements OnInit {

  @Input() activityItem: ActivityItem;

  constructor() { }

  ngOnInit() {}

}
