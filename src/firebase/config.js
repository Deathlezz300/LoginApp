// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLusblBCiShJoAbW0VY2sQG7XLzNStnH4",
  authDomain: "react-proyecto-ea6ea.firebaseapp.com",
  projectId: "react-proyecto-ea6ea",
  storageBucket: "react-proyecto-ea6ea.appspot.com",
  messagingSenderId: "770669961831",
  appId: "1:770669961831:web:7c21fc678c77de5a18eac2"
};

// Initialize Firebase

export const FireBaseapp = initializeApp(firebaseConfig);

export const FirebaseAuth=getAuth(FireBaseapp);

export const FirebaseDB=getFirestore(FireBaseapp);