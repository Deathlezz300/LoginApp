import React from 'react'
import { JournalAppRouter } from './Router/JournalAppRouter'
import { AppTheme } from './Themes/AppTheme'

export const JournalApp = () => {
  return (
    <AppTheme>

        <JournalAppRouter/>

    </AppTheme>
  )
}

