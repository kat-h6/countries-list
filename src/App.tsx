import React from 'react'
import { ThemeProvider } from '@mui/material/styles'

import Routes from './Routes'
import { customTheme } from './themes'

export default function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Routes />
      </ThemeProvider>
    </>
  )
}
