import { Component, OnInit, Input } from '@angular/core';
import { Page } from '@ionic/core';

@Component({
  selector: 'den-page',
  templateUrl: './den-page.component.html',
  styleUrls: ['./den-page.component.scss'],
})
export class DenPageComponent implements OnInit {

  @Input() page: Page;

  constructor() { }

  ngOnInit() {}

}
