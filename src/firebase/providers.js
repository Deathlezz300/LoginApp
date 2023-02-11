import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { updateProfile } from "firebase/auth";

const googleProvider=new GoogleAuthProvider();

const errorsMessage=[
    {
        name:'auth/invalid-email',
        value:'Esta cuenta no está registrada'
    },
    {
        name:'auth/wrong-password',
        value:'Contraseña Incorrecta'
    }
]


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

export const registerUserWithEmailPassword=async({email,password,name})=>{
    try{
        const resp=await createUserWithEmailAndPassword(FirebaseAuth,email,password);
        const {uid,photoURL}=resp.user;
        updateProfile(resp.user,{
            displayName:name
        })
        return{
            Ok:true,
            uid,
            photoURL,
            email,
            displayName:name
        }

    }catch(error){
        return {
            Ok:false,
            errorMessage:error.message
        }
    }
}

export const SignInWithEmailPassword=async({email,password})=>{
    try{
        const result=await signInWithEmailAndPassword(FirebaseAuth,email,password);
        const {uid,photoURL,displayName}=result.user;
        return{
            Ok:true,
            uid,
            email,
            photoURL,
            displayName
        }
    }catch(error){
        const message=detectErrorMessage(error.code);
        return{
            Ok:false,
            errorMessage:message
        }
    }
}

const detectErrorMessage=(errorMessage)=>{
    const resp=errorsMessage.find(error2=>{
        return error2.name===errorMessage.toString();
    });
    return resp.value;
}

export const LogOutFirebase=async()=>{
    return await FirebaseAuth.signOut();
}