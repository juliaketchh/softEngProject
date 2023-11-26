import { auth, googleProvider } from "./config/firebase";
import { signInWithPopup } from "firebase/auth";

export const Auth = () => {
    

    return <div> </div>


};


export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } 
    catch (err) {
        console.error(err);
    }
};
