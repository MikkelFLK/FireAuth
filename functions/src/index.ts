import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {DependencyFactory} from './dependency-factory';

const serviceAccount = require("../../secret.json");
const difa = new DependencyFactory();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fullstackdev-firestorm.firebaseio.com"
});

 exports.createProduct = functions.firestore
   .document('products/{id}')
   .onCreate((snap, context) => {
     return difa.getProductController().createProduct(snap, context);
   });

 exports.execute = functions.firestore
   .document('order/{id}')
   .onCreate((snap, context) => {
     return difa.getOrderContoller().execute(snap, context);
   });
