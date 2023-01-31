import React from 'react'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

export const AtuhRoutes = () => {
  return (
    <>
    
    <Routes>

      <Route path='login' element={<LoginPage/>}/>
      <Route path='register' element={<RegisterPage/>}/>
      <Route path='/*' element={<Navigate to='/auth/login'/>}/>
    </Routes>

    
    </>
  )
}
