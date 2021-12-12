import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const LargeHeading = ({ children }) => {
  return (
    <Typography variant="h3" component="h3">
      {children}
    </Typography>
  );
};
LargeHeading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
export default LargeHeading;
