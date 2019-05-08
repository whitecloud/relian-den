import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'den-favorite-icon',
  templateUrl: './den-favorite-icon.component.html',
  styleUrls: ['./den-favorite-icon.component.scss'],
})
export class DenFavoriteIconComponent implements OnInit {

  @Input() isFavorite: boolean;

  constructor() { }

  ngOnInit() {}

}
