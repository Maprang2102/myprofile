import firebase from "firebase/compat/app";
import "firebase/firestore"
import "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection,getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpwMNcTg8VNYWKZ0gyYWigbzQu0wMgFLU",
  authDomain: "mywebsite-mp.firebaseapp.com",
  projectId: "mywebsite-mp",
  storageBucket: "mywebsite-mp.appspot.com",
  messagingSenderId: "54318649412",
  appId: "1:54318649412:web:2a1a3e1d1b4e483cd1ac11",
  measurementId: "G-CC8N47F4X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// end firebase


const db = getFirestore(app);

export default db;