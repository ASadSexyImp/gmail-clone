// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALbbXIwOtNiCVF8G4KvnZpBpcD18BLTno",
    authDomain: "clone-4333f.firebaseapp.com",
    projectId: "clone-4333f",
    storageBucket: "clone-4333f.appspot.com",
    messagingSenderId: "251878736561",
    appId: "1:251878736561:web:e107ca001cbf84bc5a9890",
    measurementId: "G-0YS5X6WQL6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }