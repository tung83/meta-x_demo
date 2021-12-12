import React from 'react';
import { Stack } from '@mui/material';
import SearchForm from './container/searchForm';
import Follow from './container/follow';
const GuidePge = () => {
  return (
    <Stack spacing={2} direction="row">
      <SearchForm variant="text">Text</SearchForm>
      <Follow variant="contained">Contained</Follow>
    </Stack>
  );
};
export default GuidePge;
