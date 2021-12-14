import React from 'react';
import { Stack } from '@mui/material';
import SearchForm from '../../container/searchForm';
import Follow from '../../container/follow';
import { isMobileScreen } from '../../utils/screen';
const GuidePge = () => {
  const isMobile = isMobileScreen();
  return (
    <Stack ml={2} mb={2} direction="row">
      <SearchForm />
      {!isMobile && <Follow />}
    </Stack>
  );
};
export default GuidePge;
