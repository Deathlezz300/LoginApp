import React from 'react'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'

export const RegisterPage = () => {
  return (
      <AuthLayout titulo='Registro'>

      <form>
          <Grid container>
            <Grid item xs={12} sx={{paddingBottom:2}}>
              <TextField label="Nombre completo" type='text' fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sx={{paddingBottom:2}}>
              <TextField label="Correo" type='email' fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Contraseña" type='password' fullWidth></TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{paddingTop:1.5}}>
            <Grid item xs={12} >
              <Button variant='contained' fullWidth>Crear cuenta</Button>                
            </Grid>
            <Grid container direction='row' justifyContent='end' sx={{paddingTop:1}}>
                <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
                <Link component={RouterLink} to='/auth/login'>Ingresar</Link>
            </Grid>

          </Grid>
        </form>

      </AuthLayout>
       
  )
}

