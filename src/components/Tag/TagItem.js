import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
const TagItem = ({ item }) => {
  return (
    <div>
      <Box
        sx={{
          position: 'relative',
          paddingTop: '100%',
          marginBottom: '10px'
        }}>
        <Button
          variant="outlined"
          sx={{
            top: 0,
            left: 0,
            position: 'absolute',
            width: '100%',
            height: '100%',
            padding: '5px 6px',
            border: '4px solid transparent',
            borderRadius: '10px',
            backgroundColor: '#262626',
            justifyContent: 'start',
            alignItems: 'flex-end'
          }}>
          <Typography
            variant="h5"
            component="h5"
            noWrap
            sx={{
              fontSize: '24px',
              fontWeight: 700,
              border: '4px solid currentColor',
              padding: '4px 10px 2px 10px',
              borderRadius: '8px',
              marginBottom: '5px',
              textTransform: 'capitalize'
            }}>
            {item.name}
          </Typography>
        </Button>
      </Box>
      <div>
        <Typography
          variant="body1"
          component="p"
          noWrap
          sx={{ fontSize: '14.9px', letterSpacing: '0.139688px' }}>
          {item.name}
        </Typography>
        <Typography
          variant="caption"
          component="div"
          noWrap
          sx={{ fontSize: '11.175px', color: '#b2b2b2', letterSpacing: '0.3725px' }}>
          {`${item.count} Results`}
        </Typography>
      </div>
    </div>
  );
};

TagItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    count: PropTypes.number
  })
};

export default TagItem;
