import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC61SYO0ZbqkSDk5NJ8BS4V5xHyt42OWXM",
  authDomain: "sapient-depot-285005.firebaseapp.com",
  databaseURL: "https://sapient-depot-285005.firebaseio.com",
  projectId: "sapient-depot-285005",
  storageBucket: "sapient-depot-285005.appspot.com",
  messagingSenderId: "824933335351",
  appId: "1:824933335351:web:e6dea3addc3595301f9ab2",
  measurementId: "G-31EG6H0Z8Z"
});

const db = firebaseApp.firestore();

export default db;