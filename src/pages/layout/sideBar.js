import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../resources/logo.svg';
import homeIcon from '../../resources/homeIcon.svg';
import { makeStyles } from '@mui/styles';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  logo: {}
}));
const listItems = (
  <div>
    {['Home', 'Tags'].map((text) => (
      <ListItem
        button
        key={text}
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }
        }}>
        <ListItemIcon sx={{ minWidth: 'auto' }}>
          <img src={homeIcon} alt="logo" />
        </ListItemIcon>
        <ListItemText
          sx={{
            color: 'primary.main'
          }}
          primary={text}
        />
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
