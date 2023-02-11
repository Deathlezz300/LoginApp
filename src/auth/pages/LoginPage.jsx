import React, { useMemo } from 'react'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'
import { useForm } from '../../Hooks/useForm'
import { startGoogleSign, startSignInWithEmailPassword } from '../../store/auth/thunks'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {Alert} from '@mui/material'

export const LoginPage = () => {

  const {form,onInputChange,onResetForm}=useForm({email:'',password:''});

  const {status,errorMessage}=useSelector(state=>state.auth);

  const isAuthenticating=useMemo(()=>{
    return status==='checking';
  },[status]);

  const dispatch=useDispatch();


  const HandleSubmit=(evento)=>{
    evento.preventDefault();
  }

  const onLogin=()=>{
    dispatch(startSignInWithEmailPassword(form));
  }

  const onGoogleSign=()=>{
    dispatch(startGoogleSign());
  }

  return (
      <AuthLayout titulo='Login'>

      <form onSubmit={HandleSubmit} id='formulario'>
          <Grid container>
            <Grid item xs={12} sx={{paddingBottom:2}}>
              <TextField value={form.email} onChange={onInputChange} name='email' label="Correo" type='email' placeholder='usuario@gmail.com' fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField value={form.password} onChange={onInputChange} name='password' label="Contraseña" type='password' fullWidth></TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{paddingTop:1.5}}>
            
            <Grid item xs={12} display={!!errorMessage ? '':'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} onClick={onLogin} type='submit' variant='contained' fullWidth>Login</Button>                
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} type='submit' onClick={onGoogleSign} variant='contained' fullWidth>
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
