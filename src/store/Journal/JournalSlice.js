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
             state.notes=action.payload;
        },
        setSaving:(state)=>{
            state.isSaving=true;
        },
        updateNotes:(state,action)=>{
            state.isSaving=false;
            state.notes.map(note=>{
                if(note.id===action.payload.id){
                    note.body=action.payload.body;
                    note.title=action.payload.title;
                    note.imagesURLS=action.payload.imagesURLS;
                }
                return note;
            });
        },
        deleteNoteById:(state)=>{

        }
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote,setActiveNote,setNotes,setSaving,updateNotes,deleteNoteById } = JournalSlice.actions;