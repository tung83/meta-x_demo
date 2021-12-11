import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../logo.svg';
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
      <ListItem button key={text}>
        <ListItemIcon>
          <img src={logo} alt="logo" />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </div>
);
const NavBar = ({ drawerWidth }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
      }}
      open>
      <>
        <Link href="#" underline="none">
          <img src={logo} alt="logo" />
        </Link>
        <List>{listItems}</List>
      </>
    </Drawer>
  );
};

NavBar.propTypes = {
  drawerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default NavBar;
