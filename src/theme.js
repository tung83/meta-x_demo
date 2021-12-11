import { createTheme } from '@material-ui/core/styles';

const fontSize = 14; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 14;
const pxToRem = (size) => `${(size / htmlFontSize) * coef}rem`;
const theme = createTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  palette: {
    primary: {
      main: '#ff9b33'
    },
    secondary: {
      main: '#edf2ff'
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
