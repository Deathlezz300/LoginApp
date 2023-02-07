import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authslice"


export const checkingAuth=(email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
    }
}

export const startGoogleSign=()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result=await singInWithGoogle();
        const {Ok,uid,email,displayName,photoURL}=result;
        if(!Ok){
            dispatch(logout(result.errorMessage));
        }
        return dispatch(login({
            uid,
            email,
            displayName,
            photoURL
        }));
    }
}