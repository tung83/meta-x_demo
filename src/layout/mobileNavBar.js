import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import logo from '../resources/logo.svg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  bottomNav: {
    maxWidth: '88px',
    minMidth: '70px'
  }
}));
const TopMobileNav = ({ isHome }) => {
  const navigate = useNavigate();
  const handleBackClicked = () => {
    navigate('/home');
  };
  return (
    <Toolbar sx={{ backgroundColor: '#181818', display: { sm: 'none' } }}>
      {isHome ? (
        <div>
          <img src={logo} alt="logo" />
        </div>
      ) : (
        <div onClick={handleBackClicked}>
          <span>{'< '}</span>Home Page
        </div>
      )}
    </Toolbar>
  );
};

TopMobileNav.propTypes = {
  isHome: PropTypes.bool
};
const BottomNav = () => {
  const classes = useStyles();
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation sx={{ backgroundColor: '#181818', display: { sm: 'none' } }} showLabels>
        <BottomNavigationAction className={classes.bottomNav} icon={<FavoriteIcon />} />
        <BottomNavigationAction className={classes.bottomNav} icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  );
};
const MobileNavBar = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  useEffect(() => {
    setIsHome(location.pathname === '/home');
  }, [location]);
  return (
    <div>
      <TopMobileNav isHome={isHome} />
      {isHome && <BottomNav />}
    </div>
  );
};

MobileNavBar.propTypes = {};
export default MobileNavBar;
