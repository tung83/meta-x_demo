import leftArrow from '../../resources/leftArrow.svg';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function Logo({ sx, ...others }) {
  return (
    <Typography
      {...others}
      variant="span"
      component="span"
      sx={{ '.left-arrow-icon': { width: '12.77px', height: '21.67px' }, ...sx }}
    >
      <img className="left-arrow-icon" src={leftArrow} alt="left-arrow" />
    </Typography>
  );
}

Logo.propTypes = {
  sx: PropTypes.object
};
export default Logo;
