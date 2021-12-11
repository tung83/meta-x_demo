import React, { useState, useEffect } from 'react';
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
    }
  },
  'MuiSlider-thumbSizeMedium': {
    width: theme.typography.pxToRem(20),
    height: theme.typography.pxToRem(20)
  }
}));

const PrimarySlider = ({ inputMarks = [] }) => {
  const [marks, setMarks] = useState([]);
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

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <div className={classes.root}>
      <Slider
        aria-label="Custom marks"
        step={null}
        max={marks.length - 1}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="off"
        marks={marks}
      />
    </div>
  );
};

PrimarySlider.propTypes = {
  inputMarks: PropTypes.arrayOf(PropTypes.int).isRequired
};

export default PrimarySlider;
