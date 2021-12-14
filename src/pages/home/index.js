import React from 'react';
import { Stack } from '@mui/material';
import SearchForm from '../../container/Home/SearchForm';
import Follow from '../../container/Follow';
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
