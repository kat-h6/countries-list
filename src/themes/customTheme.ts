import { createTheme } from '@mui/material/styles'

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#0B3C5D',
      contrastText: '#f2ebe9',
    },
    secondary: {
      main: '#D9B310',
      contrastText: '#ffffff',
    },
    info: {
      main: '#de5499',
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
