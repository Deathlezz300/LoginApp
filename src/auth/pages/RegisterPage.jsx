import React, { useMemo, useState } from 'react'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'
import { useForm } from '../../Hooks/useForm'
import { useDispatch } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'
import { useSelector } from 'react-redux'
import {Alert} from '@mui/material'

const formValidations={
  email:[(value)=>value.includes('@'),'Debe contener @'],
  password:[(value)=>value.length>=6,'La clave debe tener mas de 6 caracteres'],
  name:[(value)=>value.length>=1,'El nombre es obligatorio']
}

const initalForm={
  name:'',
  email:'',
  password:''
}

export const RegisterPage = () => {

  const {status,errorMessage}=useSelector(state=>state.auth);
  const isCheckingAuthentication=useMemo(()=>status==='checking',[status]);

  const [formSubmit, setFormSubmit] = useState(false);

  const dispatch=useDispatch();

  const {form,onInputChange,formValidation,isFormValid}=useForm(initalForm,formValidations)

  const handleSubmit=(evento)=>{
    evento.preventDefault();
    setFormSubmit(true);
    if(isFormValid){
      dispatch(startCreatingUserWithEmailPassword(form));
    }
  }

  return (
      <AuthLayout titulo='Registro'>

      <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{paddingBottom:2}}>
              <TextField error={!!formValidation.nameValid && formSubmit} helperText={formValidation.nameValid}  value={form.name} name='name' onChange={onInputChange} label="Nombre completo" type='text' fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sx={{paddingBottom:2}}>
              <TextField type='email' error={!!formValidation.emailValid && formSubmit} helperText={formValidation.emailValid}  value={form.email} name='email' onChange={onInputChange} label="Correo"  fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField error={!!formValidation.passwordValid && formSubmit} helperText={formValidation.passwordValid}  value={form.password} name='password' onChange={onInputChange} label="Contraseña" type='password' fullWidth></TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{paddingTop:1.5}}>

            <Grid item xs={12} display={!!errorMessage ? '':'none'}>
                <Alert severity='error'>{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12} >
              <Button disabled={isCheckingAuthentication} type='submit' variant='contained' fullWidth>Crear cuenta</Button>                
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

