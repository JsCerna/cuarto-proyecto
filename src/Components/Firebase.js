// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeMHZzV8Sl39Oi3nT_qquRCJUm8SQ_qvc",
  authDomain: "restaurantapp-94140.firebaseapp.com",
  projectId: "restaurantapp-94140",
  storageBucket: "restaurantapp-94140.firebasestorage.app",
  messagingSenderId: "498329579024",
  appId: "1:498329579024:web:91b887f9fd09b206a3e495",
  measurementId: "G-EX10MRP0XB"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase);