import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { getThemeByName } from '../themes/themes'

export const ThemeContext = React.createContext((themeName: string): void => {})

const MuiThemeProvider: React.FC = (props) => {
  const [themeName, _setThemeName] = useState('customTheme')
  const theme = getThemeByName(themeName)

  return (
    <ThemeContext.Provider value={_setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default MuiThemeProvider
