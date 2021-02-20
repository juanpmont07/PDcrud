import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDr8vtJpDzCBTGIl9dUodcF2zWAXZwNdfQ",
    authDomain: "crudtask-5bfb4.firebaseapp.com",
    projectId: "crudtask-5bfb4",
    storageBucket: "crudtask-5bfb4.appspot.com",
    messagingSenderId: "654997427747",
    appId: "1:654997427747:web:0aee3a67f6f409fba90396"
  };


  export const firebaseApp = firebase.initializeApp(firebaseConfig)