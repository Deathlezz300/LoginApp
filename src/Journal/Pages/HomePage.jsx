import React from 'react'
import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../Layout/JournalLayout'
import { NothingSelectedView } from '../Views/NothingSelectedView'
import { NoteView } from '../Views/NoteView'
import { AddOutlined } from '@mui/icons-material'

export const HomePage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView/>
      {/* <NoteView/> */}
      <IconButton size='large' sx={{
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
