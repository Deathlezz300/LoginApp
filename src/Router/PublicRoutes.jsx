import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { AtuhRoutes } from '../auth/Routes/AtuhRoutes'
import { Navigate } from 'react-router-dom'

export const PublicRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/auth/*' element={<AtuhRoutes/>}/>
            <Route path='/*' element={<Navigate to='/auth/login'/>}/>
        </Routes>
    
    </>
  )
}
