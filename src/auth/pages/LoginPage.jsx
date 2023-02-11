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
import { useState } from 'react'

const formValidations={
  email:[(value)=>value.includes('@'),'Debe contener @'],
  password:[(value)=>value.length>=6,'La clave debe tener mas de 6 caracteres'],
}

export const LoginPage = () => {

  const [formSubmit, setformSubmit] = useState(false)

  const {form,onInputChange,formValidation,isFormValid}=useForm({email:'',password:''},formValidations);

  const {status,errorMessage}=useSelector(state=>state.auth);

  const isAuthenticating=useMemo(()=>{
    return status==='checking';
  },[status]);

  const dispatch=useDispatch();


  const HandleSubmit=(evento)=>{
    evento.preventDefault();
    setformSubmit(true);
  }

  const onLogin=()=>{
    if(isFormValid){
      return dispatch(startSignInWithEmailPassword(form));
    }
  }

  const onGoogleSign=()=>{
    dispatch(startGoogleSign());
  }

  return (
      <AuthLayout titulo='Login'>

      <form onSubmit={HandleSubmit} id='formulario'>
          <Grid container>
            <Grid item xs={12} sx={{paddingBottom:2}}>
              <TextField error={!!formValidation.emailValid && formSubmit } helperText={formValidation.emailValid} value={form.email} onChange={onInputChange} name='email' label="Correo" type='email' placeholder='usuario@gmail.com' fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField error={!!formValidation.passwordValid && formSubmit} helperText={formValidation.passwordValid} value={form.password} onChange={onInputChange} name='password' label="Contraseña" type='password' fullWidth></TextField>
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
