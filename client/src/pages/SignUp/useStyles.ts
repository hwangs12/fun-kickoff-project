import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
    backgroundColor: theme.palette.text.secondary,
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: theme.typography.fontFamily,
    textAlign: 'center',
  },
  form: {
    backgroundColor: theme.palette.secondary.main,
    paddingLeft: 100,
    paddingRight: 100,
  },
  link: {
    color: theme.palette.primary.main,
  },
  member: {
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 35,
  },
}));

export default useStyles;
