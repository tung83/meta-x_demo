import { lazy } from 'react';
import Stack from '@mui/material/Stack';
import ImageItem from '../../components/Card/ImageItem';
import { useParams } from 'react-router-dom';
import { userPagingFetch } from '../../utils/apiServices';
import InfiniteScrollStandard from '../../container/List/InfiniteScrollStandard';
import ImageList from '@mui/material/ImageList';
import { isMobileScreen } from '../../utils/screen';
import Follow from '../../container/Follow';
const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '../404'));

const ResultPage = () => {
  const isMobile = isMobileScreen();
  const { pageSize, keyword } = useParams();
  let pageSizeMatches = pageSize.match(/\d+/);
  if (!pageSizeMatches) {
    return <NotFound />;
  }
  const renderItems = (items) => {
    return (
      <ImageList cols={isMobile ? 2 : 3} gap={8}>
        {items.map((user) => (
          <ImageItem key={user.id} item={user}></ImageItem>
        ))}
      </ImageList>
    );
  };
  return (
    <Stack spacing={2} direction="row">
      <Stack direction="column" flex={1}>
        <InfiniteScrollStandard
          queryKey="users"
          queryFn={(pageParam) => userPagingFetch({ ...pageParam, pageSize, keyword })}
          renderItems={renderItems}
        />
      </Stack>
      {!isMobile && <Follow />}
    </Stack>
  );
};
export default ResultPage;
