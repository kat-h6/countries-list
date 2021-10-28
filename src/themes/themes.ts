import { Theme } from '@mui/material/styles'

import { blueTheme } from './blueTheme'
import { darkTheme } from './darkTheme'
import { greenTheme } from './greenTheme'
import { redTheme } from './redTheme'

export function getThemeByName(theme: string): Theme {
  return themeMap[theme]
}

const themeMap: { [key: string]: Theme } = {
  blueTheme,
  darkTheme,
  greenTheme,
  redTheme,
}
