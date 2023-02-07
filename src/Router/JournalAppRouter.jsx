import React from 'react'
import { AtuhRoutes } from '../auth/Routes/AtuhRoutes'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { JournalRoutes } from '../Journal/Routes/JournalRoutes'

export const JournalAppRouter = () => {
  return (
    <>
    
      <Routes>
          <Route path='auth/*' element={<AtuhRoutes/>}/>
          <Route path='/*' element={<JournalRoutes/>}/>
          <Route path='/' element={<Navigate to='auth/login'/>}/>
      </Routes>
    
    </>
  )
}
