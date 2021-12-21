import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../resources/logo.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { menuItems } from '../routes/const';
import { activeRoute } from '../hooks/router';
const useStyles = makeStyles((theme) => ({
  listItem: {
    '&.active-menu-item': {
      '& .MuiListItemText-primary': {
        visibility: 'visible'
      },
      '& svg path': {
        color: theme.palette.white.main
      }
    }
  },
  linkItem: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  topLink: {
    textDecoration: 'none',
    margin: '34px 0 20px'
  }
}));
const SideBar = ({ drawerWidth }) => {
  const classes = useStyles();
  const { isActiveMenu } = activeRoute();
  const listItems = () => (
    <div>
      {menuItems.map((item) => (
        <ListItem
          className={clsx(classes.listItem, {
            'active-menu-item': isActiveMenu(item)
          })}
          button
          key={item.name}
          sx={{
            paddingTop: '9px',
            paddingBottom: '9px',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Link to={item.href} className={classes.linkItem}>
            <ListItemIcon
              sx={{
                minWidth: 'auto',
                marginLeft: '1px',
                'svg path': { color: '#8a8a8f' },
                ':hover svg path': { color: 'white.main' }
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              sx={{
                visibility: 'hidden',
                marginTop: 0,
                paddingLeft: '1px',
                '& .MuiListItemText-primary': {
                  fontSize: '12px',
                  letterSpacing: '0.4px'
                }
              }}
              primary={item.name}
            />
          </Link>
        </ListItem>
      ))}
    </div>
  );

  return (
    <Drawer
      position="fixed"
      variant="permanent"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        display: { xs: 'none', sm: 'block' },
        alignItems: 'center',
        '& .MuiDrawer-paper': {
          paddingLeft: '1px',
          width: drawerWidth,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'grey.light',
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0, 0, 0, 0.2)'
        }
      }}
      open
    >
      <>
        <Link to="/" className={classes.topLink}>
          <img src={logo} alt="logo" />
        </Link>
        <List sx={{ width: '100%' }}>{listItems()}</List>
      </>
    </Drawer>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default SideBar;
