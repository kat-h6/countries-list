import React from 'react'
import MuiThemeProvider from './components/Theme/ThemeProvider'

import Routes from './Routes'

export default function App() {
  return (
    <>
      <MuiThemeProvider>
        <Routes />
      </MuiThemeProvider>
    </>
  )
}
