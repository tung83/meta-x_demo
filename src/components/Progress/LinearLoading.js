import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const LinearLoading = ({ classNames, ...others }) => {
  return (
    <Box className={clsx('linearLoading', classNames)} {...others}>
      <LinearProgress />
    </Box>
  );
};

LinearLoading.propTypes = {
  classNames: PropTypes.string
};

export default LinearLoading;
