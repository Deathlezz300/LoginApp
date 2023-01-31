import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../Components/ImageGallery'
import React from 'react'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>31 de enero de 2023</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{padding:2}}>
                <SaveOutlined sx={{fontSize:30,mr:1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField type='text' variant='filled' fullWidth placeholder='Ingrese un titulo' label='Titulo' sx={{border:'none',mb:1}}/>
            <TextField rows={5} type='text' variant='filled' fullWidth placeholder='¿Que sucedió hoy?' label='Titulo' sx={{border:'none',mb:1}}/>
        </Grid>
        <ImageGallery/>
    </Grid>
  )
}
