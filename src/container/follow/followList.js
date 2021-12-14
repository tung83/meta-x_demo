import PropTypes from 'prop-types';
import FollowItem from '../../components/Follow/FollowItem';
import InfiniteScrollListInBlock from '../List/InfiniteScrollListInBlock';

const FollowList = ({ queryKey, queryFn }) => {
  const renderItems = (items) => items.map((user) => <FollowItem key={user.id} item={user} />);
  return (
    <InfiniteScrollListInBlock queryKey={queryKey} queryFn={queryFn} renderItems={renderItems} />
  );
};
FollowList.propTypes = {
  queryKey: PropTypes.string,
  queryFn: PropTypes.func.isRequired
};
export default FollowList;
