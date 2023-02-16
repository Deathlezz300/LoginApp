import { createSlice } from '@reduxjs/toolkit';

export const JournalSlice = createSlice({
    name: 'Journal',
    initialState: {
      isSaving:false,
      messageSaved:'',
      notes:[],
      active:null
    },
    reducers: {
        addNewEmptyNote:(state,action)=>{
            state.notes.push(action.payload);
            state.isSaving=false;
        },
        setActiveNote:(state,action)=>{
            state.active=action.payload;
        },
        setNotes:(state,action)=>{
             
        },
        setSaving:(state)=>{
            state.isSaving=true;
        },
        updateNotes:(state)=>{

        },
        deleteNoteById:(state)=>{

        }
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote,setActiveNote,setNotes,setSaving,updateNotes,deleteNoteById } = JournalSlice.actions;