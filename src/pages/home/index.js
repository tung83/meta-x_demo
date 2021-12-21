import React from 'react';
import { Stack } from '@mui/material';
import SearchForm from '../../container/Home/SearchForm';
import Follow from '../../container/Follows';
import { isMobileScreen } from '../../hooks/screen';
const GuidePge = () => {
  const isMobile = isMobileScreen();
  return (
    <Stack
      sx={{
        padding: { xs: '0', sm: '0' },
        height: { sm: 'var(--app-height)' }
      }}
      direction="row">
      <SearchForm />
      {!isMobile && <Follow />}
    </Stack>
  );
};
export default GuidePge;
