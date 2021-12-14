import * as React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import OutlineButton from '../Button/OutlineButton';
import ContainedButton from '../Button/ContainedButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const FollowItem = ({ item }) => {
  return (
    <ListItem
      secondaryAction={
        item.isFollowing ? (
          <OutlineButton>Following</OutlineButton>
        ) : (
          <ContainedButton>Follow</ContainedButton>
        )
      }
      disablePadding>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar alt={`follower ${item.id}`} src={item.avater} variant="rounded" />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', opacity: '0.5' }}
                component="span"
                variant="body2">
                {`@${item.username}`}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

FollowItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    avater: PropTypes.string,
    isFollowing: PropTypes.bool,
    name: PropTypes.string,
    username: PropTypes.string
  }),
  onValueChanged: PropTypes.func
};

export default FollowItem;
