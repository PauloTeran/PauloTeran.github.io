import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c',
      contrastText: '#ffffff',
    },
  },
});