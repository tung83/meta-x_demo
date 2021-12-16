import React, { useState } from 'react';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PrimaryInput from '../../components/Input/PrimaryInput';
import LargeHeading from '../../components/Label/LargeHeading';
import PrimarySlider from '../../components/Slider/PrimarySlider';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
const pageSizeRange = [3, 6, 9, 12, 15, 50];
const SearchForm = () => {
  const [pageSize, setPageSize] = useState(pageSizeRange[0]);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const navToResult = () => navigate(`/result/${searchText || 'all'}/${pageSize}`);
  return (
    <Stack
      direction="column"
      flex={1}
      sx={{
        height: 'fit-content',
        minHeight: { xs: `calc(100vh - 90px)` },
        padding: { sx: '20px', sm: '0 40px', lg: '54px 130px 0' }
      }}>
      <LargeHeading>Search</LargeHeading>
      <PrimaryInput
        sx={{ marginTop: '20px' }}
        placeholder="keyword"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <Divider />
      <LargeHeading># of results per page</LargeHeading>
      <Typography variant="h3" component="h3" sx={{ fontWeight: 700, marginTop: '20px' }}>
        {`${pageSize} `}
        <Typography variant="span" component="span" sx={{ fontSize: 16, fontWeight: 400 }}>
          results
        </Typography>
      </Typography>
      <PrimarySlider
        onValueChanged={setPageSize}
        inputMarks={pageSizeRange}
        styles={{ marginTop: '14px' }}></PrimarySlider>
      <Divider />
      <Box flex={1} />
      <PrimaryButton onClick={navToResult} sx={{ maxWidth: { sm: '343px' } }}>
        Search
      </PrimaryButton>
    </Stack>
  );
};
export default SearchForm;
