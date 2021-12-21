import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiSlider-rail': {
      backgroundColor: theme.palette.white.main
    },
    '& .MuiSlider-track': {
      border: 'none',
      background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)'
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
    '& .MuiSlider-markLabelActive': {
      opacity: 1
    }
  },
  'MuiSlider-thumbSizeMedium': {
    width: '20px',
    height: '20px'
  }
}));

function MarkComponent() {
  return null;
}

const PrimarySlider = ({ styles, inputMarks = [], onValueChanged = () => {} }) => {
  const sliderRef = useRef(null);
  useEffect(() => {
    const allMarks = sliderRef?.current?.querySelectorAll('.MuiSlider-markLabel');
    if (allMarks.length === 0) {
      return;
    }
    allMarks[0].classList.add('firstLabel');
    allMarks[allMarks.length - 1].classList.add('lastLabel');
  });

  const classes = useStyles();

  const updateActiveLabel = () => {
    const allMarks = sliderRef?.current?.querySelectorAll('.MuiSlider-markLabel');
    allMarks.forEach((mark) => {
      mark.style.opacity = 0.5;
    });
    const activeMarks = sliderRef?.current?.querySelectorAll('.MuiSlider-markLabelActive');
    if (activeMarks?.length > 0) {
      activeMarks[activeMarks.length - 1].style.opacity = 1;
    }

    const sliderThumb = sliderRef?.current?.querySelectorAll('.MuiSlider-thumbColorPrimary');
    if (sliderThumb.length === 1) {
      if (sliderThumb[0].style.left === '0%') {
        sliderThumb[0].style.left = '3px';
      } else if (sliderThumb[0].style.left === '100%') {
        sliderThumb[0].style.left = 'calc(100% - 3px)';
      }
    }
  };
  const handleSliderChange = (_event, newValue) => {
    const selectedMark = inputMarks.find((mark) => mark.value === newValue);
    onValueChanged(selectedMark?.realValue);
    setTimeout(updateActiveLabel, 10);
  };
  return (
    <Box className={classes.root} sx={styles}>
      <Slider
        ref={sliderRef}
        sx={{
          height: '8px',
          '& .MuiSlider-markLabel': {
            color: (theme) => theme.palette.white.main,
            opacity: 0.5,
            top: { xs: '43px', sm: '37px' },
            '&.firstLabel': {
              left: '3px!important'
            },
            '&.lastLabel': {
              left: 'calc(100% + 1px)!important',
              transform: 'translateX(-100%)'
            }
          }
        }}
        aria-label="slider"
        step={null}
        components={{ Mark: MarkComponent }}
        min={inputMarks.length ? inputMarks[0].value : 0}
        max={inputMarks.length ? inputMarks[inputMarks.length - 1].value : 0}
        defaultValue={inputMarks.length ? inputMarks[0].value : 0}
        onChange={handleSliderChange}
        marks={inputMarks}
      />
    </Box>
  );
};

PrimarySlider.propTypes = {
  styles: PropTypes.object,
  inputMarks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onValueChanged: PropTypes.func
};

export default PrimarySlider;
