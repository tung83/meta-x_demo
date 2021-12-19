import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Logo from '../components/Icon/Logo';
import leftArrow from '../resources/leftArrow.svg';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { headerTopHeight } from '../styles/const';
import { menuItems } from '../routes/const';
import clsx from 'clsx';
import { activeRoute } from '../hooks/router';

const useStyles = makeStyles(() => ({
  bottomNav: {
    maxWidth: '75px',
    minWidth: '70px'
  }
}));
const TopMobileNav = ({ isHome }) => {
  const navigate = useNavigate();
  const handleBackClicked = () => {
    navigate('/home');
  };
  return (
    <Toolbar
      sx={{
        height: `${headerTopHeight}px`,
        padding: '28px 10px 27px 21px',
        backgroundColor: '#181818',
        display: { sm: 'none' }
      }}>
      {isHome ? (
        <div>
          <Logo />
        </div>
      ) : (
        <div onClick={handleBackClicked}>
          <span>
            <img src={leftArrow} alt="left-arrow" />
          </span>
          Home Page
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
  const { isActiveMenu } = activeRoute();
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        sx={{
          height: '66px',
          backgroundColor: '#181818',
          boxShadow: 'inset 0px 0.5px 0px rgb(0 0 0 / 80%)',
          backdropFilter: 'blur(54.3656px)',
          display: { sm: 'none' }
        }}
        showLabels>
        {menuItems.map((item) => (
          <BottomNavigationAction
            key={item.name}
            className={clsx(classes.bottomNav, {
              'active-menu-item': isActiveMenu(item)
            })}
            sx={{
              'svg path': { color: '#8a8a8f' },
              '&.active-menu-item svg path': { color: 'white.main' }
            }}
            icon={item.icon}
          />
        ))}
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
