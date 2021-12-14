import { useRef } from 'react';
import InfiniteScrollStandard from './InfiniteScrollStandard';
import PropTypes from 'prop-types';
import { Scrollbar } from 'react-scrollbars-custom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 150px)!important',
    '& .ScrollbarsCustom-Track': {
      backgroundColor: `${theme.palette.white.main}!important`
    }
  }
}));
const InfiniteScrollListInBlock = ({ queryKey, queryFn, renderItems }) => {
  const scrollParentRef = useRef(null);
  const classes = useStyles();

  return (
    <Scrollbar ref={scrollParentRef} className={classes.root} style={{}}>
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
