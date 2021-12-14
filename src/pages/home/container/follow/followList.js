import { Fragment, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import PropTypes from 'prop-types';
import { Scrollbar } from 'react-scrollbars-custom';
import { makeStyles } from '@mui/styles';
import FollowItem from '../../../../components/Follow/FollowItem';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 150px)!important',
    '& .ScrollbarsCustom-Track': {
      backgroundColor: `${theme.palette.white.main}!important`
    }
  }
}));
const FollowList = ({ queryKey, queryFn }) => {
  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery(queryKey, queryFn, {
    getNextPageParam: (lastPage) => lastPage.nextPage
  });
  const scrollParentRef = useRef(null);
  const classes = useStyles();
  if (status === 'loading') {
    return <div>loading...</div>; // loading data
  }

  if (status === 'error') {
    return <div>{error.message}</div>; // error data
  }
  return (
    <Scrollbar ref={scrollParentRef} className={classes.root} style={{}}>
      <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={fetchNextPage}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        getScrollParent={() => scrollParentRef.current?.scrollerElement}
        useWindow={false}>
        {data.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map((user) => (
                <FollowItem key={user.id} item={user} />
              ))}
            </Fragment>
          );
        })}
      </InfiniteScroll>
    </Scrollbar>
  );
};
FollowList.propTypes = {
  queryKey: PropTypes.string,
  queryFn: PropTypes.func.isRequired
};
export default FollowList;
