import React from 'react';
import { Stack } from '@mui/material';
import SearchForm from '../../container/Home/SearchForm';
import Follow from '../../container/Follow';
import { isMobileScreen } from '../../utils/screen';
const GuidePge = () => {
  const isMobile = isMobileScreen();
  return (
    <Stack
      sx={{
        padding: { xs: '0', sm: '10px 0 10px 0' },
        height: '100vh'
      }}
      direction="row">
      <SearchForm />
      {!isMobile && <Follow />}
    </Stack>
  );
};
export default GuidePge;
