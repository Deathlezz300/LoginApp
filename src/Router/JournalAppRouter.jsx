import React from 'react'
import { AtuhRoutes } from '../auth/Routes/AtuhRoutes'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { JournalRoutes } from '../Journal/Routes/JournalRoutes'
import { PublicRoutes } from './PublicRoutes'
import { useCheckAuth } from '../Hooks/useCheckAuth'

export const JournalAppRouter = () => {

  const {status}=useCheckAuth();

  return (
    <>
      <Routes>
          {/* <Route path='/' element={<PublicRoutes>
            <AtuhRoutes/>
          </PublicRoutes>}/>
          <Route path='/*' element={<PrivateRoutes>
            <JournalRoutes/>
          </PrivateRoutes>}/> */}
        {
          status==='authenticated' ? <Route path='/*' element={<JournalRoutes/>}/>
          : <Route path='/auth/*' element={<AtuhRoutes/>}/>
        }

        <Route path='/*' element={<Navigate to='/auth/login'/>}/>

      </Routes>

    </>
  )
}
