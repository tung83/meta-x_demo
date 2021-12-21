import React from 'react';

import PrimaryButton from '../components/Button/PrimaryButton';
import ContainedButton from '../components/Button/ContainedButton';
import OutlineButton from '../components/Button/OutlineButton';

export default {
  title: 'Form/Button',
  component: PrimaryButton
};

const ButtonTemplate = () => <PrimaryButton>Button</PrimaryButton>;

export const PrimaryBtn = ButtonTemplate.bind({});

const ContainedBtnTemplate = () => <ContainedButton>Button</ContainedButton>;

export const ContainedBtn = ContainedBtnTemplate.bind({});

const OutlineBtnTemplate = () => <OutlineButton>Button</OutlineButton>;

export const OutlineBtn = OutlineBtnTemplate.bind({});
