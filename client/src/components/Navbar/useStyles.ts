import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    position: 'absolute',
    zIndex: 1,
  },
  header: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  member: {
    fontSize: '0.8rem',
    flexGrow: 1,
    textAlign: 'right',
    padding: '2rem',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    fontWeight: 500,
  },
  link: {
    fontSize: '0.8rem',
    padding: '0.7rem 2rem',
    backgroundColor: theme.palette.primary.main,
    marginRight: 8,
    marginLeft: 8,
    width: '7.5rem',
    textAlign: 'center',
    borderColor: theme.palette.primary.main,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    fontWeight: 500,
  },
  linkLogin: {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  buttons: {
    fontSize: '0.8rem',
    padding: '0.7rem 1.5rem',
    backgroundColor: theme.palette.secondary.main,
    marginRight: 8,
    marginLeft: 8,
    width: '7.5rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontWeight: 700,
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

export default useStyles;
