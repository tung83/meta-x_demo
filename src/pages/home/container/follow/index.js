import React from 'react';
import { makeStyles } from '@mui/styles';
import Tabs from '../../../../components/Tabs';
import FollowList from './followList';
import { userPagingFetch, followingPagingFetch } from '../../../../utils/apiServices';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.typography.pxToRem(220)
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
  return <Tabs tabs={tabs} classNames={classes.root} />;
};
export default Follow;
