import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import PropTypes from 'prop-types';
import LinearLoading from '../../components/Progress/LinearLoading';
import { useState } from 'react';
const InfiniteScrollStandard = ({ queryKey, queryFn, renderItems, ...others }) => {
  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery(queryKey, queryFn, {
    getNextPageParam: (lastPage) => lastPage.nextPage
  });
  const [loading, setLoading] = useState(false);
  if (status === 'loading') {
    return <LinearLoading />;
  }

  if (status === 'error') {
    return <div>{error.message}</div>; // error data
  }
  const items = data.pages.flatMap((group) => group.data);
  return (
    <InfiniteScroll
      hasMore={hasNextPage && !loading}
      loadMore={async () => {
        setLoading(true);
        await fetchNextPage();
        setLoading(false);
      }}
      loader={
        <div className="loader" key={0}>
          <LinearLoading />
        </div>
      }
      {...others}>
      {renderItems(items)}
    </InfiniteScroll>
  );
};
InfiniteScrollStandard.propTypes = {
  queryKey: PropTypes.string.isRequired,
  queryFn: PropTypes.func.isRequired,
  renderItems: PropTypes.func.isRequired
};
export default InfiniteScrollStandard;
