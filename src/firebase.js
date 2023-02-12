// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUbQMg5A9JwsTyPWi8QygwELfb5foui88",
  authDomain: "disneyplus-clone-f6699.firebaseapp.com",
  projectId: "disneyplus-clone-f6699",
  storageBucket: "disneyplus-clone-f6699.appspot.com",
  messagingSenderId: "780678317137",
  appId: "1:780678317137:web:8ea66cea4db974e643e470",
  measurementId: "G-05VEM0W6K3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
