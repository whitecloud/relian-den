import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {Item} from "../../../src/app/types";

try { admin.initializeApp() } catch (e) { console.log(e) }
const db = admin.firestore();

export const itemsOnCreate = functions.firestore
  .document('items/{itemId}')
  .onCreate((doc, context) => {

    const item : Item = doc.data() as Item;


    console.log('Setting up item: ' + item.title);

    return db.collection('activities').add({
      actionText: 'Justin created an item:',
      item: item,

      // auth metadata
      createdAt: Date.now(),
    })
    .then(() => console.log('Done adding activity!'))
    .catch(err => console.log(err));
  });