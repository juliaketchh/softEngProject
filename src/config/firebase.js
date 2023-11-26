// Firebase set up and initialization

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY20OINvzMeP4LpXBKnK3eT1nuptFZ-p8",
  authDomain: "fir-authentication-76337.firebaseapp.com",
  projectId: "fir-authentication-76337",
  storageBucket: "fir-authentication-76337.appspot.com",
  messagingSenderId: "699156652575",
  appId: "1:699156652575:web:78859318d200e07f5a6b2a",
  measurementId: "G-PMG0ST12T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

