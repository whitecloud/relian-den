import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;

  authLog: any = [];

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user ID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false;
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest';
    } else if (this.currentUserAnonymous) {
      return 'Anonymous';
    } else {
      return this.authState.displayName || 'User without a Name';
    }
  }

  //// Social Auth ////

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.socialSignIn(provider);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  // async facebookLogin() {
  //   if (this.platform.is('cordova')) {
  //     return await this.nativeFacebookLogin();
  //   } else {
  //     const provider = new firebase.auth.FacebookAuthProvider();
  //     return await this.socialSignIn(provider);
  //   }
  // }

  // async nativeFacebookLogin() {
  //   try {
  //     const response = await this.facebook.login(['email', 'public_profile']);
  //     const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
  //     await firebase.auth().signInWithCredential(facebookCredential);
  //     await this.updateUserData();
  //     return facebookCredential;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential =>  {
          this.authState = credential.user;
          this.updateUserData();
          return credential;
      })
      .catch(error => console.log(error));
  }


  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
    .then((user) => {
      this.authState = user;
      this.updateUserData();
    })
    .catch(error => console.log(error));
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string, additionalInfo?) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        this.authState = auth.user;
        this.updateUserData(additionalInfo);
        return auth.user;
      });
  }

  emailLogin(email: string, password: string) {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
       .then((auth) => {
         this.authState = auth.user;
         this.updateUserData();
         return auth.user;
       });
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }


  //// Log Out ////

  async logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }


  //// Helpers ////

  private updateUserData(additionalInfo?: any): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const data: any = {};

    if (this.authState.displayName) {
      data.name = this.authState.displayName;
    }
    if (this.authState.email) {
      data.email = this.authState.email;
    }
    if (this.authState.photoURL) {
      data.photoURL = this.authState.photoURL;
    }

    // Assign any additional info to the user
    if (additionalInfo) {
      Object.assign(data, additionalInfo);
    }

    this.afs.doc(path).set(data, {merge: true})
    .catch(error => console.log(error));

  }
}
