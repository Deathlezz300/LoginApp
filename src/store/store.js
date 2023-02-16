import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authslice'
import { JournalSlice } from './Journal/JournalSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    journal:JournalSlice.reducer
  },
})