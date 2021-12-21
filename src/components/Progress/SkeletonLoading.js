import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Skeleton } from '@mui/material';
const SkeletonLoading = ({ ...others }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Skeleton variant="rectangular" {...others} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Box>
  );
};

SkeletonLoading.propTypes = {
  count: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default SkeletonLoading;
