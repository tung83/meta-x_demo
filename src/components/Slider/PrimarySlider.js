import React, { useState, useEffect, useRef } from 'react';
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
      height: theme.typography.pxToRem(8)
    },
    '& .MuiSlider-mark': {
      display: 'none'
    },
    '& .MuiSlider-thumbColorPrimary': {
      background: '#1B1B1B',
      border: `${theme.typography.pxToRem(6)} solid #FFD05D`
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
  const [marks, setMarks] = useState([]);
  const sliderRef = useRef(null);
  useEffect(() => {
    setMarks(
      inputMarks.map((value, index) => ({
        value: index,
        label: value.toString(),
        realValue: value
      }))
    );
  }, [inputMarks]);
  const classes = useStyles();

  const valueLabelFormat = (value) => {
    return marks.findIndex((mark) => mark.value === value) + 1;
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
    onValueChanged(marks[newValue]?.realValue);
    setTimeout(updateActiveLabel, 10);
  };
  return (
    <div className={classes.root} style={styles}>
      <Slider
        ref={sliderRef}
        aria-label="Custom marks"
        step={null}
        max={marks.length - 1}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="off"
        onChange={handleSliderChange}
        marks={marks}
      />
    </div>
  );
};

PrimarySlider.propTypes = {
  styles: PropTypes.object,
  inputMarks: PropTypes.arrayOf(PropTypes.number).isRequired,
  onValueChanged: PropTypes.func
};

export default PrimarySlider;
