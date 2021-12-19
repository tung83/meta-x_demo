import React from 'react';
import { makeStyles } from '@mui/styles';
import Tabs from '../../components/Tabs';
import FollowList from './FollowList';
import { userPagingFetch, followingPagingFetch } from '../../utils/apiServices';

const useStyles = makeStyles(() => ({
  sidebar: {
    width: '375px',
    '& .ScrollbarsCustom': {
      height: 'calc(100vh - 100px)!important'
    },
    '& .linearLoading': {
      margin: '0 17px 0 16px'
    }
  },
  sidebarMain: {
    position: 'sticky',
    top: 0,
    paddingTop: '19px'
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
