import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 15,
    color: 'rgb(0,0,0,1)',
    paddingLeft: '5px',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: 'Roboto',
  },
  inputs: {
    marginTop: '.5rem',
    height: '2rem',
    padding: '0.6rem 1rem',
    border: '1px solid #D0D2D7',
    borderRadius: 5,
    fontSize: '0.9rem',
    fontWeight: 400,
  },
  forgot: {
    paddingRight: 10,
    color: '#f14140',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 35,
    fontSize: 14,
    backgroundColor: theme.typography.button.backgroundColor,
    fontWeight: theme.typography.button.fontWeight,
  },
}));

export default useStyles;
