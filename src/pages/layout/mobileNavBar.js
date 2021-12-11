import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import logo from '../../resources/logo.svg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

const BottomNav = () => (
  <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation sx={{ display: { sm: 'none' } }} showLabels>
      <BottomNavigationAction label="Recents" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Favorites" icon={<LocationOnIcon />} />
    </BottomNavigation>
  </Paper>
);
const TopMobileNav = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setIsHome(location.pathname === '/home');
  }, [location]);
  const handleBackClicked = () => {
    navigate('/home');
  };
  return (
    <Toolbar sx={{ display: { sm: 'none' } }}>
      {isHome ? (
        <div>
          <img src={logo} alt="logo" />
        </div>
      ) : (
        <div onClick={handleBackClicked}>
          <span>{'<'}</span>Home Page
        </div>
      )}
    </Toolbar>
  );
};

TopMobileNav.propTypes = {
  isHome: PropTypes.bool
};
const MobileNavBar = () => {
  return (
    <div>
      <TopMobileNav />
      <BottomNav />
    </div>
  );
};

MobileNavBar.propTypes = {};
export default MobileNavBar;
