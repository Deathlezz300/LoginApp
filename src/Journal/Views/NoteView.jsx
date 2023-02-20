import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../Components/ImageGallery'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../Hooks/useForm'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/Journal/JournalSlice'
import { UpdateNote } from '../../store/Journal/thunks'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

  const dispatch=useDispatch();

  const {active:note,isSaving,messageSaved}=useSelector(state=>state.journal);

  const {id,title,body,date,imagesURLS,form,onInputChange}=useForm(note);

  const dateString=useMemo(()=>{
    const date2=new Date(date);
    return date2.toUTCString();
  },[date]);


  useEffect(()=>{
    if(form!=note){
      dispatch(setActiveNote(form));
    }
  },[body,title]);

  useEffect(()=>{
      if(messageSaved.length>0){
        Swal.fire('Nota actualizada',messageSaved,'success');
      }
  },[messageSaved])

  const onSaveNote=()=>{
    dispatch(UpdateNote());
  }

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid>
        <Grid item>
            <Button disabled={isSaving} onClick={onSaveNote} color='primary' sx={{padding:2}}>
                <SaveOutlined sx={{fontSize:30,mr:1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField name='title' onChange={onInputChange} value={title} type='text' variant='filled' fullWidth placeholder='Ingrese un titulo' label='Titulo' sx={{border:'none',mb:1}}/>
            <TextField name='body' onChange={onInputChange} value={body} rows={5} type='text' variant='filled' fullWidth placeholder='¿Que sucedió hoy?' label='Descripcion' sx={{border:'none',mb:1}}/>
        </Grid>
        <ImageGallery/>
    </Grid>
  )
}
