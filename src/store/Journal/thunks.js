import {collection, doc, getDocs, setDoc} from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNotes } from './JournalSlice';

export const startNewNote=()=>{
    return async(dispatch,getState)=>{
        dispatch(setSaving());
        const {uid}=getState().auth;

        const newNote={
            title:'',
            body:'',
            date: new Date().getDate(),
            imagesURLS:[]
        }

        const newDoc=doc(collection(FirebaseDB,`${uid}/journal/notes`));
        await setDoc(newDoc,newNote);
        newNote.id=newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes=()=>{
    return async(dispatch,getState)=>{
        const {uid}=getState().auth;
        const collectionRef=collection(FirebaseDB,`${uid}/journal/notes`);
        const docs= await getDocs(collectionRef);

        const notes=[];

        docs.forEach(note=>{
            notes.push( {id:note.id,...note.data()} );
        });
        dispatch(setNotes(notes));
    }
}

export const UpdateNote=()=>{
    return async(dispatch,getState)=>{
        dispatch(setSaving());
        const {id,title,body,imagesURLS=[],date}=getState().journal.active;
        const {uid}=getState().auth;
        const noteToFireStore={
            title,
            body,
            date,
            imagesURLS
        }
        const url=`${uid}/journal/notes/${id}`;

        const docRef=doc(FirebaseDB,url);
        await setDoc(docRef,noteToFireStore,{merge:true});
        dispatch(updateNotes({id,title,body,imagesURLS,date}));
    }
}