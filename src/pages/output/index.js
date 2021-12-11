import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';

import PrimaryButton from '../../components/Buttton/PrimaryButton';
import OutlineButton from '../../components/Buttton/OutlineButton';
import ContainedButton from '../../components/Buttton/ContainedButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PrimarySlider from '../../components/Slider/PrimarySlider';
const useStylesBase = makeStyles({
  root: {
    color: 'blue' // 🔵
  }
});

const useStyles = makeStyles({
  root: {
    color: 'red' // 🔴
  }
});
const GuidePge = () => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const className = clsx(classes.root, classesBase.root);
  return (
    <Stack spacing={2} direction="column">
      <div className={className}>test heder</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <PrimaryButton>Text</PrimaryButton>
      <OutlineButton>Text</OutlineButton>
      <ContainedButton>Text</ContainedButton>
      <PrimaryInput></PrimaryInput>
      <PrimarySlider inputMarks={[1, 3, 6, 9, 50]}></PrimarySlider>
    </Stack>
  );
};
export default GuidePge;
