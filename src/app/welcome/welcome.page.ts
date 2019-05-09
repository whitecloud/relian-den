import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  name: string = '';
  loggingIn: boolean = false;
  
  constructor(
    private userService: UserService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async login() {
    if (this.validInput()) {
      this.loggingIn = true;
      await this.userService.login(this.name);
      this.navCtrl.navigateForward('/home');
      setTimeout(() => this.loggingIn = false, 1000);
    }
  }

  validInput() {
    return this.name.length > 3;
  }

}
