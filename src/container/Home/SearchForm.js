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
const pageSizeRange = [
  { value: 3, label: ' 3', realValue: 3 },
  { value: 6, label: '6', realValue: 6 },
  { value: 9, label: '9', realValue: 9 },
  { value: 12, label: '12', realValue: 12 },
  { value: 15, label: '15', realValue: 15 },
  { value: 18.968, label: '50  ', realValue: 50 }
];
const SearchForm = () => {
  const [pageSize, setPageSize] = useState(pageSizeRange[0].realValue);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const navToResult = () => navigate(`/result/${searchText || 'all'}/${pageSize}`);
  return (
    <Stack
      direction="column"
      flex={1}
      sx={{
        height: 'fit-content',
        minHeight: { xs: 'calc(100vh - 160px)', sm: 'calc(100vh - 87px)' },
        padding: { sx: '20px', sm: '0 40px', lg: '55px 130px 0' }
      }}>
      <LargeHeading styles={{ marginTop: { xs: '1px', sm: '0' } }}>Search</LargeHeading>
      <PrimaryInput
        sx={{ marginTop: { xs: '16px', sm: '19px' }, marginBottom: { xs: '28px', sm: '0px' } }}
        placeholder="Keyword"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <Divider
        sx={{
          display: { xs: 'none', sm: 'block' },
          margin: '29px 0 31px'
        }}
      />
      <LargeHeading># of results per page</LargeHeading>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          height: '50px',
          lineHeight: 1.04167,
          fontWeight: 700,
          marginTop: { xs: '15px', sm: '19px' }
        }}>
        {`${pageSize} `}
        <Typography
          variant="span"
          component="span"
          sx={{
            display: 'inline-block',
            marginLeft: '-1px',
            marginBottom: '7px',
            verticalAlign: 'bottom',
            fontSize: '16px',
            fontWeight: 400
          }}>
          results
        </Typography>
      </Typography>
      <PrimarySlider
        onValueChanged={setPageSize}
        inputMarks={pageSizeRange}
        styles={{ margin: { xs: '6px 0 0', sm: '6px -2px 0 1px' } }}></PrimarySlider>
      <Box flex={1} sx={{ display: { xs: 'block', sm: 'none' } }} />
      <Divider sx={{ margin: { xs: '30px 0 80px', sm: '21px 0 30px' } }} />
      <Box flex={1} sx={{ display: { xs: 'none', sm: 'block' } }} />
      <PrimaryButton onClick={navToResult} sx={{ maxWidth: { sm: '343px' } }}>
        Search
      </PrimaryButton>
    </Stack>
  );
};
export default SearchForm;
