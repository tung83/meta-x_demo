import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../resources/logo.svg';
import homeIcon from '../../resources/homeIcon.svg';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';

const menuItems = [
  { name: 'Home', href: '/home', icon: homeIcon },
  { name: 'Tags', href: '/tags', icon: homeIcon }
];
const listItems = (
  <div>
    {menuItems.map((item) => (
      <ListItem
        button
        key={item.name}
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }
        }}>
        <Link
          href={item.href}
          underline="none"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <img src={item.icon} alt="logo" />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: 'primary.main'
            }}
            primary={item.name}
          />
        </Link>
      </ListItem>
    ))}
  </div>
);
const SideBar = ({ drawerWidth }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        alignItems: 'center',
        '& .MuiDrawer-paper': {
          backgroundColor: 'grey.light',
          boxSizing: 'border-box',
          width: drawerWidth,
          display: 'flex',
          alignItems: 'center',
          borderRight: '1px solid rgba(0, 0, 0, 0.2)'
        }
      }}
      open>
      <>
        <Link
          href="/"
          underline="none"
          sx={(theme) => ({
            margin: `${theme.typography.pxToRem(37)} ${theme.typography.pxToRem(10)}`
          })}>
          <img src={logo} alt="logo" />
        </Link>
        <List sx={{ width: '100%' }}>{listItems}</List>
      </>
    </Drawer>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default SideBar;
