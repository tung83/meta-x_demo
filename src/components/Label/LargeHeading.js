import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const LargeHeading = ({ styles, children }) => {
  return (
    <Typography variant="h5" component="h5" sx={{ textTransform: 'capitalize', ...styles }}>
      {children}
    </Typography>
  );
};
LargeHeading.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
export default LargeHeading;
