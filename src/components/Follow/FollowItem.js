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
      sx={{
        '& .MuiListItemSecondaryAction-root': {}
      }}
      secondaryAction={
        item.isFollowing ? (
          <ContainedButton>Following</ContainedButton>
        ) : (
          <OutlineButton>Follow</OutlineButton>
        )
      }
      disablePadding>
      <ListItemButton sx={{ padding: '8px 95px 8px 16px!important', width: '100%' }}>
        <ListItemAvatar>
          <Avatar
            alt={`follower ${item.id}`}
            sx={{ border: '1px solid #F8F8F8', borderRadius: '5px' }}
            src={item.avater}
            variant="rounded"
          />
        </ListItemAvatar>
        <ListItemText
          sx={{
            lineHeight: 1.5,
            margin: 0,
            '.MuiTypography-root': {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }
          }}
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'block', opacity: '0.5', fontSize: '14px' }}
                component="span"
                noWrap>
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
  })
};

export default FollowItem;
