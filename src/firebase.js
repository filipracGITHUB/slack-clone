import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0sIeud95FfVgIPg8AOQRC5JHF5OdUy_8",
  authDomain: "slack-clone-fed25.firebaseapp.com",
  projectId: "slack-clone-fed25",
  storageBucket: "slack-clone-fed25.appspot.com",
  messagingSenderId: "750285187433",
  appId: "1:750285187433:web:e1136aca9d61e53c26f5f8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
