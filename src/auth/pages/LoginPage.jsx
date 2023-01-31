import React from 'react'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'

export const LoginPage = () => {
  return (
      <AuthLayout titulo='Login'>

      <form>
          <Grid container>
            <Grid item xs={12} sx={{paddingBottom:2}}>
              <TextField label="Correo" type='email' placeholder='usuario@gmail.com' fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Contraseña" type='password' fullWidth></TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{paddingTop:1.5}}>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>Login</Button>                
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                  <Google/>
                  <Typography sx={{marginLeft:1}}>Google</Typography>
                </Button>                
            </Grid>

            <Grid container direction='row' justifyContent='end' sx={{paddingTop:1}}>
                <Link component={RouterLink} to='/auth/register'>Crear cuenta</Link>
            </Grid>

          </Grid>
        </form>

      </AuthLayout>
       
  )
}
