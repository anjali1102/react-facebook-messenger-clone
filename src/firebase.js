import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6Lk1DdfntKC_3z5uag5Zl0GW94q6X0js",
  authDomain: "messenger--2020.firebaseapp.com",
  databaseURL: "https://messenger--2020.firebaseio.com",
  projectId: "messenger--2020",
  storageBucket: "messenger--2020.appspot.com",
  messagingSenderId: "15466479276",
  appId: "1:15466479276:web:9184f3931cf8c7dfeea909",
  measurementId: "G-0SQRCWWVNR",
});

const db = firebaseApp.firestore();
export default db;
