import { Theme } from '@mui/material/styles'

import { customTheme } from './customTheme'
import { darkTheme } from './darkTheme'

export function getThemeByName(theme: string): Theme {
  return themeMap[theme]
}

const themeMap: { [key: string]: Theme } = {
  customTheme,
  darkTheme,
}
