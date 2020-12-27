import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBruqg_f2z6JCzmNPEopdRxT5XQOrVEyho",
  authDomain: "clone-73e04.firebaseapp.com",
  projectId: "clone-73e04",
  storageBucket: "clone-73e04.appspot.com",
  messagingSenderId: "196007817999",
  appId: "1:196007817999:web:274d6c9d943cc5d472c47a",
  measurementId: "G-9BLVDGPDCJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
