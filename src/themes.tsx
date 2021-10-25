import { createTheme } from '@mui/material/styles'

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#264143',
      contrastText: '#f2ebe9',
    },
    secondary: {
      main: '#e99f4c',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontSize: 14,
  },
})
