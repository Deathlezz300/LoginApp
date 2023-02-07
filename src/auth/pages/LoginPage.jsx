import React, { useMemo } from 'react'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'
import { useForm } from '../../Hooks/useForm'
import { checkingAuth, startGoogleSign } from '../../store/auth/thunks'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const LoginPage = () => {

  const {form,onInputChange,onResetForm}=useForm({correo:'',clave:''});

  const {status}=useSelector(state=>state.auth);

  const isAuthenticating=useMemo(()=>{
    return status==='checking';
  },[status]);

  const dispatch=useDispatch();


  const HandleSubmit=(evento)=>{
    evento.preventDefault();
    onResetForm();
  }

  const onLogin=()=>{
    dispatch(checkingAuth(form.correo,form.clave));
  }

  const onGoogleSign=()=>{
    dispatch(startGoogleSign());
  }

  return (
      <AuthLayout titulo='Login'>

      <form onSubmit={HandleSubmit} id='formulario'>
          <Grid container>
            <Grid item xs={12} sx={{paddingBottom:2}}>
              <TextField value={form.correo} onChange={onInputChange} name='correo' label="Correo" type='email' placeholder='usuario@gmail.com' fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField value={form.clave} onChange={onInputChange} name='clave' label="Contraseña" type='password' fullWidth></TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{paddingTop:1.5}}>
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
