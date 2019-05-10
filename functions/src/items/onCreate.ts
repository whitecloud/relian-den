import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {Item} from "../../../src/app/types";

try { admin.initializeApp() } catch (e) { console.log(e) }
const db = admin.firestore();

export const itemsOnCreate = functions.firestore
  .document('items/{itemId}')
  .onCreate((doc, context) => {

    const item: Item = doc.data() as Item;
    item.id = doc.id;

    console.log('Setting up item: ' + item.title);

    return new Promise(() => {
      db.collection('activities').add({
        actionText: item.createdBy.name + ' created an item:',
        item: item,

        // auth metadata
        createdAt: Date.now(),
      })
        .then(() => console.log('Done adding activity!'))
        .catch(err => console.log(err));

      db.collection('search').add({
        matches: [...generateMatches(item.title), ...generateMatches(item.description)],
        item: item,

        // auth metadata
        createdAt: Date.now(),
      })
        .catch(err => console.log(err));
    })
      .then(() => console.log('item:onCreate job finished'))
      .catch(err => console.log(err));
  });

function generateMatches(itemString: any) {
  const matches: string[] = [];
  if(!itemString) return matches;
  for (let i = 0; i < itemString.length; i++) {
    for (let j = i + 1; j < itemString.length; j++) {
      matches.push(itemString.slice(i, j).toLowerCase());
    }
  }
  return matches;
}
