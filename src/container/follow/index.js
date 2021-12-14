import React from 'react';
import { makeStyles } from '@mui/styles';
import Tabs from '../../components/Tabs';
import FollowList from './followList';
import { userPagingFetch, followingPagingFetch } from '../../utils/apiServices';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: theme.typography.pxToRem(360)
  },
  sidebarMain: {
    position: 'sticky',
    top: 0
  }
}));
const tabs = [
  { label: 'Followers', children: <FollowList queryKey="followers" queryFn={userPagingFetch} /> },
  {
    label: 'Following',
    children: <FollowList queryKey="following" queryFn={followingPagingFetch} />
  }
];
const Follow = () => {
  const classes = useStyles();
  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarMain}>
        <Tabs tabs={tabs} />
      </div>
    </aside>
  );
};
export default Follow;
