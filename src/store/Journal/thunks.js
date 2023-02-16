import {collection, doc, setDoc} from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote, setSaving } from './JournalSlice';

export const startNewNote=()=>{
    return async(dispatch,getState)=>{
        dispatch(setSaving());
        const {uid}=getState().auth;

        const newNote={
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const newDoc=doc(collection(FirebaseDB,`${uid}/journal/notes`));
        await setDoc(newDoc,newNote);
        newNote.id=newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}