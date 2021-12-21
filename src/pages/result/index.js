import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import ImageItem from '../../components/Card/ImageItem';
import { resultListPagingFetch } from '../../utils/apiServices';
import InfiniteScrollStandard from '../../container/List/InfiniteScrollStandard';
import ImageList from '@mui/material/ImageList';
import { isMobileScreen, isTabletScreen } from '../../hooks/screen';
import Follow from '../../container/Follows';
import Box from '@mui/material/Box';
import Back from '../../components/Icon/Back';
import SkeletonLoading from '../../components/Progress/SkeletonLoading';
const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '../404'));

const ResultPage = () => {
  const isMobile = isMobileScreen();
  const isTablet = isTabletScreen();
  const { pageSize, keyword } = useParams();
  let pageSizeMatches = pageSize.match(/\d+/);
  if (!pageSizeMatches) {
    return <NotFound />;
  }
  const renderGrid = (renderItems) => {
    return (
      <ImageList
        cols={isMobile ? 1 : isTablet ? 2 : 3}
        sx={{
          columnGap: '34px!important',
          rowGap: { xs: '30px!important', sm: '21px!important' }
        }}
      >
        {renderItems}
      </ImageList>
    );
  };
  const renderItems = (items) => {
    return (
      <>
        {items.map((user) => (
          <ImageItem key={user.id} item={user}></ImageItem>
        ))}
      </>
    );
  };
  return (
    <Stack spacing={2} direction="row">
      <Stack
        direction="column"
        flex={1}
        sx={{
          height: 'fit-content',
          minHeight: { xs: 'calc(var(--app-height) - 160px)', sm: 'calc(var(--app-height) - 87px)' }
        }}
      >
        <Box
          sx={{
            padding: { xs: '21px 0 7px', sm: '40px 40px 0', lg: '93px 92.5px 0' }
          }}
        >
          <Back sx={{ display: { xs: 'none', sm: 'inline-block' } }} />
          <Typography
            variant="span"
            component="h4"
            sx={{
              display: 'inline-block',
              fontSize: { xs: '24px', sm: '30px' },
              fontWeight: 400,
              marginLeft: { lg: '31.73px' }
            }}
          >
            Results
          </Typography>
        </Box>

        <Box
          flex={1}
          sx={{
            padding: { sm: '0 40px', lg: '7px 122px 0 130px' }
          }}
        >
          <InfiniteScrollStandard
            queryKey="users"
            queryFn={(pageParam) => resultListPagingFetch({ ...pageParam, pageSize, keyword })}
            renderItems={(items) => renderGrid(renderItems(items))}
            loadingComponent={renderGrid(<SkeletonLoading sx={{ height: '150px' }} />)}
          />
        </Box>
      </Stack>
      {!isMobile && <Follow />}
    </Stack>
  );
};
export default ResultPage;
