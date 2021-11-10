import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto, "Open Sans", "sans-serif"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 300,
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
      secondary: '#fafafa',
    },
  },
  shape: {
    borderRadius: 5,
  },
});
