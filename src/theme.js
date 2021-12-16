import { createTheme } from '@material-ui/core/styles';

const fontSize = 14; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 14;
const pxToRem = (size) => `${(size / htmlFontSize) * coef}rem`;
const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': {
          color: '#fff'
        },
        body: {
          backgroundColor: '#181818',
          fontFamily: 'Ubuntu',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '1rem',
          lineHeight: 1.5
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          opacity: 0.1,
          borderColor: '#FFFFFF'
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#edf2ff'
    },
    orange: {
      main: '#ff9b33'
    },
    grey: {
      light: '#1b1b1b',
      dark: '#181818'
    },
    white: {
      main: '#ffffff'
    },
    bgDefault: '#121212'
  },
  typography: {
    pxToRem,
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.5,
    default: {
      main: {
        fontFamily: 'Ubuntu, Helvetica, sans-serif',
        fontSize: '16px'
      },
      sm: {
        fontFamily: 'Ubuntu, Helvetica, sans-serif',
        fontSize: '14px'
      }
    },
    secondary: {
      fontFamily: 'Open Sans, Helvetica, sans-serif',
      fontSize: pxToRem(12)
    }
  }
});
export default theme;
