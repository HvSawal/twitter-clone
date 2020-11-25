// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6eOKT14rjYiNq0GveyPc6gj3ZPflc9JQ",
    authDomain: "twitter-clone-9d029.firebaseapp.com",
    databaseURL: "https://twitter-clone-9d029.firebaseio.com",
    projectId: "twitter-clone-9d029",
    storageBucket: "twitter-clone-9d029.appspot.com",
    messagingSenderId: "805418020216",
    appId: "1:805418020216:web:108cdef690ac95bc1bec8d",
    measurementId: "G-M75NQ7CFM1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;