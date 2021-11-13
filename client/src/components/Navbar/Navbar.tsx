import useStyles from './useStyles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import AuthMenu from '../AuthMenu/AuthMenu';

export default function ButtonAppBar() {
  const classes = useStyles();
  const { loggedInUser, logout } = useAuth();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} alt="logo" />
          </IconButton>

          {loggedInUser ? (
            <>
              <Typography className={classes.member}></Typography>
              <Button className={classes.buttons}>notifications</Button>
              <Button className={classes.buttons}>my jobs</Button>
              <Button className={classes.buttons}>messages</Button>
            </>
          ) : (
            <>
              <Typography className={classes.member}>become a member</Typography>
              <Link to="/login" className={`${classes.link} ${classes.linkLogin}`}>
                log in
              </Link>
              <Link to="/signup" className={`${classes.link} `}>
                sign up
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
