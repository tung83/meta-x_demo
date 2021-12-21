import React from 'react';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PrimarySlider from '../../components/Slider/PrimarySlider';
import PrimaryButton from '../../components/Button/PrimaryButton';
import OutlineButton from '../../components/Button/OutlineButton';
import ContainedButton from '../../components/Button/ContainedButton';

const pageSizeRange = [
  { value: 3, label: ' 3', realValue: 3 },
  { value: 6, label: '6', realValue: 6 },
  { value: 9, label: '9', realValue: 9 },
  { value: 12, label: '12', realValue: 12 },
  { value: 15, label: '15', realValue: 15 },
  { value: 18.968, label: '50  ', realValue: 50 }
];
const ComponentsPage = () => {
  return (
    <Stack
      sx={{
        width: '868px',
        padding: { xs: '50px', sm: '88px 68px' },
        minHeight: { sm: 'var(--app-height)' }
      }}
      direction="column"
    >
      <Typography
        variant="span"
        component="h4"
        sx={{
          display: 'inline-block',
          fontSize: { xs: '24px', sm: '30px' },
          fontWeight: 700
        }}
      >
        Components
      </Typography>
      <Stack
        sx={{
          padding: { xs: '0', sm: '188px 0 0' }
        }}
        direction="row"
      >
        <PrimaryButton sx={{ width: { sm: '335px' }, marginRight: '41px' }}>Button</PrimaryButton>
        <PrimaryButton sx={{ width: { sm: '343px' } }}>Button</PrimaryButton>
      </Stack>
      <Stack
        sx={{
          margin: { xs: '0', sm: '105px 0  0 106px' }
        }}
        direction="row"
      >
        <OutlineButton sx={{ marginRight: '60px' }}>Button</OutlineButton>
        <OutlineButton>Button</OutlineButton>
      </Stack>
      <Stack
        sx={{
          margin: { xs: '20px 0', sm: '48px 0 0 106px' }
        }}
        direction="row"
      >
        <ContainedButton sx={{ width: { marginRight: '60px' } }}>Button</ContainedButton>
        <ContainedButton>Button</ContainedButton>
      </Stack>
      <PrimaryInput
        sx={{
          margin: { xs: '20px 0', sm: '203px  8px 0 0' }
        }}
        placeholder="Keyword"
      />
      <PrimaryInput
        sx={{
          margin: { xs: '20px 0', sm: '70px 8px 0 0' }
        }}
        placeholder="Keyword"
      />
      <PrimarySlider
        inputMarks={pageSizeRange}
        styles={{
          margin: { xs: '20px 0', sm: '210px 0 0' }
        }}
      />
      <PrimarySlider
        inputMarks={pageSizeRange}
        styles={{
          margin: { xs: '20px 0', sm: '90px 0 90px' }
        }}
      />
    </Stack>
  );
};
export default ComponentsPage;
