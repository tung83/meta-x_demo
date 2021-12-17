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
      border: '3px solid rgba(255, 255, 255, 0.5)',
      padding: '20px 18px 19px 17px',
      letterSpacing: '0.25px',
      boxSizing: 'border-box',
      borderRadius: '6px',
      color: theme.palette.white.main,
      opacity: 0.3,

      '&:focus': {
        border: `3px solid ${theme.palette.orange.main}`,
        color: theme.palette.white.main,
        backgroundColor: theme.palette.bgDefault,
        opacity: 1
      }
    }
  };
});
export default PrimaryInput;
