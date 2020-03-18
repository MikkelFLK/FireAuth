import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const serviceAccount = require("../secret.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fullstackdev-firestorm.firebaseio.com"
});

 // Start writing Firebase Functions
 // https://firebase.google.com/docs/functions/typescript

 exports.helloWorld = functions.https.onRequest(
   (request, response) => {
  response.send("Hello from Firebase!");
 });
