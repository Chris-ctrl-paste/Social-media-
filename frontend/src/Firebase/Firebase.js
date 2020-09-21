

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBRJoeoWRnwrrU4zuJs3XevuQFAIFaXAXU",
    authDomain: "social-media-platform-824e7.firebaseapp.com",
    databaseURL: "https://social-media-platform-824e7.firebaseio.com",
    projectId: "social-media-platform-824e7",
    storageBucket: "social-media-platform-824e7.appspot.com",
    messagingSenderId: "528934346089",
    appId: "1:528934346089:web:2ef0b6f1bc8bfc340a71f8",
    measurementId: "G-FWXT8YP9YR"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };

export default db;