import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
