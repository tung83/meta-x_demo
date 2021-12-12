import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import PrimaryButton from '../../components/Buttton/PrimaryButton';
import OutlineButton from '../../components/Buttton/OutlineButton';
import ContainedButton from '../../components/Buttton/ContainedButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PrimarySlider from '../../components/Slider/PrimarySlider';

import { useQuery } from 'react-query';

const getPosts = async () => {
  const response = await fetch(
    'https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10'
  );
  return response.json();
};
const GuidePge = () => {
  const { data, isFetching, isLoading, error, isError } = useQuery('key_unique', getPosts);
  console.log(data, 'test');
  if (isLoading) {
    return <div>loading...</div>; // loading data
  }

  if (isError) {
    return <div>{error.message}</div>; // error data
  }
  return (
    <Stack spacing={2} direction="column">
      <ul>
        {data?.data?.map((d) => (
          <li key={`post-${d.id}`}>{d.name}</li>
        ))}
      </ul>
      {isFetching && <p>updating...</p>}
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
