import { lazy } from 'react';
import Stack from '@mui/material/Stack';
import ImageItem from '../../components/Card/ImageItem';
import { useParams } from 'react-router-dom';
import { userPagingFetch } from '../../utils/apiServices';
import InfiniteScrollStandard from '../../components/List/InfiniteScrollStandard';
import ImageList from '@mui/material/ImageList';
const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '../404'));

const GuidePge = () => {
  const { pagesize, key } = useParams();
  console.log(pagesize, key);
  let pagesizeMatches = pagesize.match(/\d+/);
  if (!pagesizeMatches) {
    return <NotFound />;
  }
  const renderItems = (items) => {
    console.log(items, 'taaaaaaaaa');
    return (
      <ImageList cols={3} gap={8}>
        {items.map((user) => (
          <ImageItem key={user.id} item={user}></ImageItem>
        ))}
      </ImageList>
    );
  };
  return (
    <Stack spacing={2} direction="column">
      <InfiniteScrollStandard
        queryKey="users"
        queryFn={userPagingFetch}
        renderItems={renderItems}
      />
    </Stack>
  );
};
export default GuidePge;
