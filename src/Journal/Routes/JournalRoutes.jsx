import React from 'react'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
export const JournalRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='home' element={<HomePage/>}/>
            <Route path='/*' element={<Navigate to='/home'/>}/>
        </Routes>
    </>
  )
}
