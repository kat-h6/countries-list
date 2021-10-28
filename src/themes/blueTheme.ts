import { createTheme } from '@mui/material/styles'

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#0B3C5D',
      contrastText: '#f2ebe9',
    },
    secondary: {
      main: '#D9B310',
      contrastText: '#ffffff',
      light: '#f2ebe9',
    },
    info: {
      main: '#555d50',
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
