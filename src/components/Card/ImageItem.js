import * as React from 'react';
import PropTypes from 'prop-types';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const ImageItem = ({ item }) => {
  return (
    <ImageListItem>
      <img src={item.avater} srcSet={item.avater} alt={item.name} loading="lazy" />
      <ImageListItemBar
        title={item.name}
        subtitle={<span>by: {item.username}</span>}
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
