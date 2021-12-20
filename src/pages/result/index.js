import { lazy } from 'react';
import Stack from '@mui/material/Stack';
import ImageItem from '../../components/Card/ImageItem';
import { useParams } from 'react-router-dom';
import { resultListPagingFetch } from '../../utils/apiServices';
import InfiniteScrollStandard from '../../container/List/InfiniteScrollStandard';
import ImageList from '@mui/material/ImageList';
import { isMobileScreen, isTabletScreen } from '../../utils/screen';
import Follow from '../../container/Follows';
import Box from '@mui/material/Box';
import Back from '../../components/Icon/Back';
import { Typography } from '@mui/material';
const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '../404'));

const ResultPage = () => {
  const isMobile = isMobileScreen();
  const isTablet = isTabletScreen();
  const { pageSize, keyword } = useParams();
  let pageSizeMatches = pageSize.match(/\d+/);
  if (!pageSizeMatches) {
    return <NotFound />;
  }
  const renderItems = (items) => {
    return (
      <ImageList
        cols={isMobile ? 1 : isTablet ? 2 : 3}
        sx={{
          columnGap: '34px!important',
          rowGap: { xs: '30px!important', sm: '21px!important' }
        }}>
        {items.map((user) => (
          <ImageItem key={user.id} item={user}></ImageItem>
        ))}
      </ImageList>
    );
  };
  return (
    <Stack spacing={2} direction="row">
      <Stack
        direction="column"
        flex={1}
        sx={{
          height: 'fit-content',
          minHeight: { xs: 'calc(100vh - 160px)', sm: 'calc(100vh - 87px)' }
        }}>
        <Box
          sx={{
            padding: { xs: '21px 0 7px', sm: '40px 40px 0', lg: '93px 92.5px 0' }
          }}>
          <Back sx={{ display: { xs: 'none' } }} />
          <Typography
            variant="span"
            component="h4"
            sx={{
              display: 'inline-block',
              fontSize: { xs: '24px', sm: '30px' },
              fontWeight: 400,
              marginLeft: { sm: '31.73px' }
            }}>
            Results
          </Typography>
        </Box>

        <Box
          flex={1}
          sx={{
            padding: { sx: '20px', sm: '0 40px', lg: '7px 122px 0 130px' }
          }}>
          <InfiniteScrollStandard
            queryKey="users"
            queryFn={(pageParam) => resultListPagingFetch({ ...pageParam, pageSize, keyword })}
            renderItems={renderItems}
          />
        </Box>
      </Stack>
      {!isMobile && <Follow />}
    </Stack>
  );
};
export default ResultPage;
