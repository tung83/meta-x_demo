import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

export const isMobileScreen = () => {
  const theme = useTheme();
  return !useMediaQuery(theme.breakpoints.up('sm'));
};

export const isTabletScreen = () => {
  const theme = useTheme();
  return !useMediaQuery(theme.breakpoints.up('md'));
};
export const useViewport = () => {
  const [isMobile, setIsMobile] = useState(isMobileScreen());

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(isMobileScreen());
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { isMobile };
};

export const setAppHeight = () => {
  const handleWindowResize = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  handleWindowResize();
  return null;
};
