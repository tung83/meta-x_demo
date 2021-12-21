import React from 'react';

import PrimarySliderComponent from '../components/Slider/PrimarySlider';

export default {
  title: 'Form/Slider',
  component: PrimarySliderComponent,
  args: {
    inputMarks: [{ value: 3, label: ' 3', realValue: 3 }]
  }
};

const PrimarySliderTemplate = (args) => <PrimarySliderComponent {...args} />;

export const PrimarySlider = PrimarySliderTemplate.bind({});

const pageSizeRange = [
  { value: 3, label: ' 3', realValue: 3 },
  { value: 6, label: '6', realValue: 6 },
  { value: 9, label: '9', realValue: 9 },
  { value: 12, label: '12', realValue: 12 },
  { value: 15, label: '15', realValue: 15 },
  { value: 18.968, label: '50  ', realValue: 50 }
];

PrimarySlider.args = {
  inputMarks: pageSizeRange,
  styles: { width: '300px' }
};
