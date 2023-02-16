import React from 'react'
import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../Layout/JournalLayout'
import { NothingSelectedView } from '../Views/NothingSelectedView'
import { NoteView } from '../Views/NoteView'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../store/Journal/thunks'
import { useSelector } from 'react-redux'

export const HomePage = () => {

  const {isSaving,active}=useSelector(state=>state.journal);

  const dispatch=useDispatch();

  const onClickNewNote=()=>{
    dispatch(startNewNote());
  }


  return (
    <JournalLayout>
      {
        active ? <NoteView/> : <NothingSelectedView/>
      }
      {/* <NoteView/> */}
      <IconButton disabled={isSaving} onClick={onClickNewNote} size='large' sx={{
        color:'white',
        backgroundColor:'error.main',
        ':hover':{backgroundColor:'error.main',opacity:0.9},
        position:'fixed',
        right:50,
        bottom:50
      }}>
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
  )
}
