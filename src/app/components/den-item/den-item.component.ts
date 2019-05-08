import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../types";

@Component({
  selector: 'den-item',
  templateUrl: './den-item.component.html',
  styleUrls: ['./den-item.component.scss'],
})
export class DenItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {}

}
