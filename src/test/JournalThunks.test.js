/** @jest-environment jsdom */

import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { addNewEmptyNote, setActiveNote, setSaving } from "../store/Journal/JournalSlice";
import { startNewNote } from "../store/Journal/thunks";

describe("Pruebas en Thunks Journal",()=>{

    const dispatch=jest.fn();
    const getState=jest.fn();

    beforeEach(()=>jest.clearAllMocks());



    test("Debe de crear una nueva nota en blanco",async()=>{

        const uid='test'
        getState.mockReturnValue({auth:{uid}})

        await startNewNote()(dispatch,getState);

        expect(dispatch).toHaveBeenCalled(setSaving());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body:'',
            title:'',
            id:expect.any(String),
            date:expect.any(Number)
        }));

        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body:'',
            title:'',
            id:expect.any(String),
            date:expect.any(Number)
        }));


        //Borrar de firebase
        const collectionRef=collection(FirebaseDB,`${uid}/journal/notes`);
        const docs=await getDocs(collectionRef);

        const deletePromises=[];
        docs.forEach(doc=>deletePromises.push(deleteDoc(doc.ref)));
        await Promise.all(deletePromises);

    });
});