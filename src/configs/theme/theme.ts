import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00897b',
    },
    secondary: {
      main: '#f7cc30',
    },
  },
  typography: {
    fontFamily: 'iransansxv',
    button: {
      textTransform: 'capitalize',
    },
  },
});

export default theme;
