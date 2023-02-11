import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { logout,login } from "../store/auth/authslice";
import { FirebaseAuth } from "../firebase/config";
import { useEffect } from "react";
export const useCheckAuth=()=>{
    
  const {status}=useSelector(state=>state.auth);
  const dispatch=useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async(user)=>{
      if(!user){
        return dispatch(logout());
      }
      const {uid,email,displayName,photoURL}=user;
      return dispatch(login({uid,email,displayName,photoURL}));
    })
  },[])

  return {
    status
  }
}