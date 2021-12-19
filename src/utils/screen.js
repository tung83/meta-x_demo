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
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(isMobileScreen());

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      setIsMobile(isMobileScreen());
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width, height, isMobile };
};
