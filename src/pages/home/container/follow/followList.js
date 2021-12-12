import Box from '@mui/material/Box';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import PropTypes from 'prop-types';

const FollowList = ({ queryKey, queryFn }) => {
  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery(queryKey, queryFn, {
    getNextPageParam: (lastPage) => lastPage.nextPage
  });
  if (status === 'loading') {
    return <div>loading...</div>; // loading data
  }

  if (status === 'error') {
    return <div>{error.message}</div>; // error data
  }
  return (
    <Box
      direction="column"
      sx={{
        maxHeight: 'calc(100vh - 150px)',
        overflowY: 'auto'
      }}>
      <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={fetchNextPage}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        useWindow={false}>
        {data.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map((user) => (
                <p key={user.id}>{user.name}</p>
              ))}
            </Fragment>
          );
        })}
      </InfiniteScroll>
    </Box>
  );
};
FollowList.propTypes = {
  queryKey: PropTypes.string,
  queryFn: PropTypes.func.isRequired
};
export default FollowList;
