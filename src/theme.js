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
    default: {
      main: {
        fontFamily: 'Ubuntu, Helvetica, sans-serif',
        fontSize: pxToRem(16)
      },
      sm: {
        fontFamily: 'Ubuntu, Helvetica, sans-serif',
        fontSize: pxToRem(14)
      }
    },
    secondary: {
      fontFamily: 'Open Sans, Helvetica, sans-serif',
      fontSize: pxToRem(12)
    }
  }
});
export default theme;
