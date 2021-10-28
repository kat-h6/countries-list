import { createTheme } from '@mui/material/styles'

export const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#344E41',
      contrastText: '#f2ebe9',
    },
    secondary: {
      main: '#8B728E',
      contrastText: '#ffffff',
      light: '#f2ebe9',
    },
    info: {
      main: '#301934',
    },
  },
  typography: {
    fontSize: 16,
    body2: {
      fontSize: 14,
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
        },
      },
    },
  },
})
