import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any = null; 

  constructor(
    private afs: AngularFirestore,
    private navCtrl: NavController
  ) { 
    this.init();
  }

  init() {
    this.user = this.getUser();
    // intentional == to match null and 'null'
    if (this.user == null) {
      this.logout();
    }
    else if (location.href.includes('welcome')) {
      this.navCtrl.navigateRoot('/home');
    }
  }

  /**
   * Fake login
   */
  async login(name) {
    const user = await this.afs.collection('users').add({name: name});
    return this.setUser({
      name: name,
      id: user.id
    });
  }

  /**
   * Fake logout
   */
  logout() {
    this.setUser(null);
    this.navCtrl.navigateRoot('/welcome', {
      animationDirection: 'back'
    });
  }

  setUser(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
