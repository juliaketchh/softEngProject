import { auth, googleProvider } from "./config/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { redirect } from 'react-router-dom';
import React, { useEffect } from 'react';

//const [isLoggedIn, setIsLoggedIn] = useState(false);

export const Auth = () => {
   
    return <div> </div>


};


// Retrieve current login state
export const authStateCurrent = () => {


    console.log(auth?.currentUser?.email);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in.
          console.log('User is logged in:', user.email);
        } else {
          // User is signed out.
          console.log('User is not logged in');
        }
      });

};


// Sign in with Google
export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
        redirect("/");
    } 
    catch (err) {
        console.error(err);
        redirect("/login");
    }
};


// Log out
export const logOut = async () => {
    try {
        await signOut(auth);
    } 
    catch (err) {
        console.error(err);
    }
};


export const handleClick = async () => {
    
    signInWithGoogle();
    
    // try {
    //     await signInWithGoogle();
    //     history.push("/");
    // } 
    // catch (error) {
    //     // setError(error.message);
    //     history.push("/login");
    // }
  
    // if (isLoggedIn) {
    //   handleLogout();
    // } else {
    //   signIn();
    // }
  };
