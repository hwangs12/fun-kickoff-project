import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto, "Open Sans", "sans-serif"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 500,
      backgroundColor: '#f14140',
    },
  },
  palette: {
    primary: {
      main: '#f14140',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#fafafa',
    },
  },
  shape: {
    borderRadius: 5,
  },
});
