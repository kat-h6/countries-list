import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'

import { getThemeByName } from '../../themes/themes'

export const ThemeContext = React.createContext((themeName: string): void => {})

const MuiThemeProvider: React.FC = (props) => {
  const curThemeName =
    localStorage.getItem('blueTheme') ||
    'darkTheme' ||
    'redTheme' ||
    'greenTheme'
  const [themeName, _setThemeName] = useState(curThemeName)
  const theme = getThemeByName(themeName)
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('blueTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default MuiThemeProvider
