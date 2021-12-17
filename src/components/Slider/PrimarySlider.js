import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiSlider-rail': {
      backgroundColor: theme.palette.white.main
    },
    '& .MuiSlider-track': {
      border: 'none',
      background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)'
    },
    '& .MuiSlider-sizeMedium': {
      height: '8px'
    },
    '& .MuiSlider-mark': {
      display: 'none'
    },
    '& .MuiSlider-thumbColorPrimary': {
      width: '24px',
      height: '24px',
      background: '#1B1B1B',
      border: `6px solid #FFD05D`
    },
    '& .MuiSlider-markLabel': {
      color: theme.palette.white.main,
      opacity: 0.5
    },
    '& .MuiSlider-markLabelActive': {
      opacity: 1
    }
  },
  'MuiSlider-thumbSizeMedium': {
    width: '20px',
    height: '20px'
  }
}));

const PrimarySlider = ({ styles, inputMarks = [], onValueChanged = () => {} }) => {
  const sliderRef = useRef(null);

  const classes = useStyles();

  const valueLabelFormat = (value) => {
    const valFormat = inputMarks.findIndex((mark) => mark.value === value) + 1;
    return valFormat;
  };
  const updateActiveLabel = () => {
    const allMarks = sliderRef?.current?.querySelectorAll('.MuiSlider-markLabel');
    allMarks.forEach((mark) => {
      mark.style.opacity = 0.5;
    });
    const activeMarks = sliderRef?.current?.querySelectorAll('.MuiSlider-markLabelActive');

    if (activeMarks?.length > 0) {
      activeMarks[activeMarks.length - 1].style.opacity = 1;
    }
  };
  const handleSliderChange = (_event, newValue) => {
    const selectedMark = inputMarks.find((mark) => mark.value === newValue);
    onValueChanged(selectedMark?.realValue);
    setTimeout(updateActiveLabel, 10);
  };
  return (
    <div className={classes.root} style={styles}>
      <Slider
        ref={sliderRef}
        aria-label="slider"
        step={null}
        min={inputMarks[0].value}
        max={inputMarks[inputMarks.length - 1].value}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="off"
        defaultValue={inputMarks[0].value}
        onChange={handleSliderChange}
        marks={inputMarks}
      />
    </div>
  );
};

PrimarySlider.propTypes = {
  styles: PropTypes.object,
  inputMarks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onValueChanged: PropTypes.func
};

export default PrimarySlider;
