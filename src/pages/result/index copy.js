import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Fragment } from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import OutlineButton from '../../components/Button/OutlineButton';
import ContainedButton from '../../components/Button/ContainedButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PrimarySlider from '../../components/Slider/PrimarySlider';
import InfiniteScroll from 'react-infinite-scroller';

import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

const fetchProjects = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    'https://avl-frontend-exam.herokuapp.com/api/users/all?pageSize=10&page=' + pageParam
  );
  const { data, page, totalPages } = res.data;
  return { data, nextPage: page < totalPages ? page + 1 : undefined };
};
const GuidePge = () => {
  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
    'projects',
    fetchProjects,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage
    }
  );
  if (status === 'loading') {
    return <div>loading...</div>; // loading data
  }

  if (status === 'error') {
    return <div>{error.message}</div>; // error data
  }
  return (
    <Stack spacing={2} direction="column">
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        {data.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map((user) => (
                <div key={user.id}>{user.name}</div>
              ))}
            </Fragment>
          );
        })}
      </InfiniteScroll>
      {/* {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group?.data?.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </Fragment>
      ))}
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div> */}
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <PrimaryButton>Text</PrimaryButton>
      <OutlineButton>Text</OutlineButton>
      <ContainedButton>Text</ContainedButton>
      <PrimaryInput></PrimaryInput>
      <PrimarySlider inputMarks={[1, 3, 6, 9, 50]}></PrimarySlider>
    </Stack>
  );
};
export default GuidePge;
