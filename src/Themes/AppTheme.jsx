import React from 'react'
import { CssBaseline } from '@mui/material'
import { purpleTheme } from './PurpleTheme'
import { ThemeProvider } from '@emotion/react'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
  </ThemeProvider>
  )
}
