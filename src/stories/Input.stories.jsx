import React from 'react';

import PrimaryInputComponent from '../components/Input/PrimaryInput';

export default {
  title: 'Form/Input',
  component: PrimaryInputComponent
};

const InputTemplate = () => <PrimaryInputComponent placeholder="Keyword" />;

export const PrimaryInput = InputTemplate.bind({});
