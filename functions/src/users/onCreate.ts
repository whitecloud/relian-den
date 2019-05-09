import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {User} from "../../../src/app/types";

try { admin.initializeApp() } catch (e) { console.log(e) }
const db = admin.firestore();

export const usersOnCreate = functions.firestore
  .document('users/{userId}')
  .onCreate((doc, context) => {

    const user : User = doc.data() as User;

    console.log('Setting up User: ' + user.name);

    return db.collection('activities').add({
      actionText: user.name + ' just joined! 👋',

      // auth metadata
      createdAt: Date.now(),
    })
    .then(() => console.log('Done adding activity!'))
    .catch(err => console.log(err));
  });