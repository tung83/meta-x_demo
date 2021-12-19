import * as React from 'react';
import PropTypes from 'prop-types';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const ImageItem = ({ item }) => {
  return (
    <ImageListItem>
      <img src={item.avater} srcSet={item.avater} alt={item.name} loading="lazy" />
      <ImageListItemBar
        sx={{
          '.MuiImageListItemBar-titleWrap': {
            paddingTop: { xs: '19px', sm: '12px' }
          },
          '.MuiImageListItemBar-title': {
            fontSize: '14.9px',
            letterSpacing: '0.139688px',
            color: 'white.main'
          },
          '.MuiImageListItemBar-subtitle': {
            marginTop: '2px',
            fontSize: '11.175px',
            letterSpacing: '0.3725px',
            color: '#b2b2b2'
          }
        }}
        title={item.name}
        subtitle={`by ${item.username}`}
        position="below"
      />
    </ImageListItem>
  );
};

ImageItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    avater: PropTypes.string,
    isFollowing: PropTypes.bool,
    name: PropTypes.string,
    username: PropTypes.string
  })
};
export default ImageItem;
