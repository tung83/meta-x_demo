import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';

const PrimaryInput = styled(Input)(({ theme }) => {
  return {
    '&:before, &:after': {
      content: 'none'
    },
    '& input': {
      ...theme.typography.default.sm,
      height: theme.typography.pxToRem(60),
      fontWeight: 400,
      lineHeight: 1.5,
      border: `${theme.typography.pxToRem(3)} solid rgba(255, 255, 255, 0.5)`,
      padding: `${theme.typography.pxToRem(20)} ${theme.typography.pxToRem(
        18
      )} ${theme.typography.pxToRem(19)}`,
      letterSpacing: theme.typography.pxToRem(0.25),
      boxSizing: 'border-box',
      borderRadius: theme.typography.pxToRem(6),
      color: theme.palette.white.main,
      opacity: 0.3,

      '&:focus': {
        border: `${theme.typography.pxToRem(3)} solid ${theme.palette.primary.main}`,
        color: theme.palette.white.main,
        backgroundColor: theme.palette.bgDefault,
        opacity: 1
      }
    }
  };
});
export default PrimaryInput;
