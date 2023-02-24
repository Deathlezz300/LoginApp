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
            state.messageSaved=''
        },
        setNotes:(state,action)=>{
             state.notes=action.payload;
        },
        setSaving:(state)=>{
            state.isSaving=true;
            state.messageSaved=''
        },
        updateNotes:(state,action)=>{
            state.isSaving=false;
            state.notes.map(note=>{
                if(note.id===action.payload.id){
                    note.body=action.payload.body;
                    note.title=action.payload.title;
                    note.imagesURLS=[...action.payload.imagesURLS];
                }
                return note;
            });
            state.messageSaved=`${action.payload.title} fue actualizada correctamente`
        },
        deleteNoteById:(state,action)=>{
            state.active=null;
            state.notes=state.notes.filter(note=>note.id!==action.payload);
            state.isSaving=false
        },
        setImagesURLs:(state,action)=>{
            state.active.imagesURLS=[...state.active.imagesURLS,...action.payload];
            state.isSaving=false;
        },
        clearDataLogOut:(state)=>{
            state.isSaving=false;
            state.notes=[];
            state.active=null;
            state.messageSaved='';
        }
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote,setActiveNote,setNotes,setSaving,updateNotes,deleteNoteById,setImagesURLs,clearDataLogOut } = JournalSlice.actions;