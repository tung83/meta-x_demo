import { useRef } from 'react';
import InfiniteScrollStandard from './InfiniteScrollStandard';
import PropTypes from 'prop-types';
import { Scrollbar } from 'react-scrollbars-custom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& .ScrollbarsCustom-Wrapper': {
      inset: '0!important'
    }
  }
}));
const InfiniteScrollListInBlock = ({ queryKey, queryFn, renderItems }) => {
  const scrollParentRef = useRef(null);
  const classes = useStyles();

  return (
    <Scrollbar ref={scrollParentRef} className={classes.root}>
      <InfiniteScrollStandard
        queryKey={queryKey}
        queryFn={queryFn}
        renderItems={renderItems}
        getScrollParent={() => scrollParentRef.current?.scrollerElement}
        useWindow={false}></InfiniteScrollStandard>
    </Scrollbar>
  );
};
InfiniteScrollListInBlock.propTypes = {
  queryKey: PropTypes.string,
  queryFn: PropTypes.func.isRequired,
  renderItems: PropTypes.func.isRequired
};
export default InfiniteScrollListInBlock;
