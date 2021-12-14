import React, { useState } from 'react';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PrimaryInput from '../components/Input/PrimaryInput';
import LargeHeading from '../components/Label/LargeHeading';
import PrimarySlider from '../components/Slider/PrimarySlider';
import PrimaryButton from '../components/Button/PrimaryButton';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
const pageSizeRange = [3, 6, 9, 12, 15, 50];
const SearchForm = () => {
  const [pageSize, setPageSize] = useState(pageSizeRange[0]);
  const [searchText, setSearchText] = useState('');
  let navigate = useNavigate();
  return (
    <Stack spacing={2} direction="column" flex={1}>
      <LargeHeading>Search</LargeHeading>
      <PrimaryInput
        placeholder="keyword"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <Divider />
      <LargeHeading># of results per page</LargeHeading>
      <Typography variant="h2" component="h2">
        {pageSize}{' '}
        <Typography variant="span" component="span">
          results
        </Typography>
      </Typography>
      <PrimarySlider onValueChanged={setPageSize} inputMarks={pageSizeRange}></PrimarySlider>
      <Divider />
      <Box flex={1} />
      <PrimaryButton
        onClick={() => navigate(`/result/${searchText || 'all'}/${pageSize}`)}
        sx={{ maxWidth: '343px' }}>
        Search
      </PrimaryButton>
    </Stack>
  );
};
export default SearchForm;
