import * as admin from 'firebase-admin';

// get the admin database
admin.initializeApp();

export * from './users/users';
export * from './items/items';
