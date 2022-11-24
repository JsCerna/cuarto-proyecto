// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx60WDffTsnOvdF-0LsKTj-tKD--0k974",
  authDomain: "proyecto4-9a0f7.firebaseapp.com",
  projectId: "proyecto4-9a0f7",
  storageBucket: "proyecto4-9a0f7.appspot.com",
  messagingSenderId: "786289735581",
  appId: "1:786289735581:web:b21b9f1a2db1b6dce3a174"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase);