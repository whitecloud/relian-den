import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-popover',
  templateUrl: './profile-popover.page.html',
  styleUrls: ['./profile-popover.page.scss'],
})
export class ProfilePopoverPage implements OnInit {

  name: string = 'Matt';

  constructor(
    public userService: UserService,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  async logout() {
    this.userService.logout();
    this.popoverCtrl.dismiss();
  }

}
