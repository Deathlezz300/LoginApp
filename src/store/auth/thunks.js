
import { LogOutFirebase, registerUserWithEmailPassword, SignInWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authslice"


export const startGoogleSign=()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result=await singInWithGoogle();
        const {Ok,uid,email,displayName,photoURL}=result;
        if(!Ok){
            return dispatch(logout(result.errorMessage));
        }
        return dispatch(login({
            uid,
            email,
            displayName,
            photoURL
        }));
    }
}

export const startCreatingUserWithEmailPassword=({name,email,password})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result=await registerUserWithEmailPassword({email,password,name});
        if(!result.Ok){
            return dispatch(logout(result.errorMessage));
        }
        return dispatch(login({
            ...result
        }))
    }
}

export const startSignInWithEmailPassword=({email,password})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result=await SignInWithEmailPassword({email,password});
        if(!result.Ok){
            return dispatch(logout(result.errorMessage));
        }
        return dispatch(login({
            ...result
        }))
    }
}

export const OnLogOutFireBase=()=>{
    return async(dispatch)=>{
        await LogOutFirebase();
        dispatch(logout(''));
    }
}