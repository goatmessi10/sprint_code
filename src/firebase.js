import firebase from 'firebase' ;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7rnSdtht1bqBt7tyLp3BwozYyxxk3kzQ",
  authDomain: "sprint-code-application.firebaseapp.com",
  databaseURL: "https://sprint-code-application.firebaseio.com",
  projectId: "sprint-code-application",
  storageBucket: "sprint-code-application.appspot.com",
  messagingSenderId: "868701414910",
  appId: "1:868701414910:web:8c2ccbf80f3833e0f68caf",
  measurementId: "G-EDJG5HF79G"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export  {db};
