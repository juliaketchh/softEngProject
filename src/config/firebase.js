// Firebase set up and initialization

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACZnSbuGJVVYWgyrt6dxT2DzxftwElOPA",
  authDomain: "amigo-swe-project.firebaseapp.com",
  projectId: "amigo-swe-project",
  storageBucket: "amigo-swe-project.appspot.com",
  messagingSenderId: "47596968635",
  appId: "1:47596968635:web:ee1dc397370457464a279e",
  measurementId: "G-YTD4JFD4G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

