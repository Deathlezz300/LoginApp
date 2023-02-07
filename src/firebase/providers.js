import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider=new GoogleAuthProvider();

export const singInWithGoogle=async()=>{
    try{
        const result= await signInWithPopup(FirebaseAuth,googleProvider);
        // const credential=GoogleAuthProvider.credentialFromResult(result);
        const {displayName,email,photoURL,uid}=result.user;
        return {
            Ok:true,
            displayName,
            email,
            photoURL,
            uid
        }
    }catch(error){
        const erroCode=error.code
        const errorMessage=error.message;
        return {
            Ok:false,
            erroCode,
            errorMessage
        }
    }
}