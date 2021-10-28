import { createTheme } from '@mui/material/styles'

export const redTheme = createTheme({
  palette: {
    primary: {
      main: '#570000',
      contrastText: '#f2ebe9',
    },
    secondary: {
      main: '#008ba7',
      contrastText: '#ffffff',
      light: '#f2ebe9',
    },
    info: {
      main: '#001440',
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
