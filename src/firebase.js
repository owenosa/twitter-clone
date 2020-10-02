import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjM_bxsCWh0eeOMgjS4J5MWAi1XjiB4HQ",
    authDomain: "twitter-clone-f0c95.firebaseapp.com",
    databaseURL: "https://twitter-clone-f0c95.firebaseio.com",
    projectId: "twitter-clone-f0c95",
    storageBucket: "twitter-clone-f0c95.appspot.com",
    messagingSenderId: "448968036656",
    appId: "1:448968036656:web:a84cda8661781df4c4f8f5",
    measurementId: "G-N7GSQ89XWQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;