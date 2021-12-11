import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const PrimaryButton = styled(Button)(({ theme }) => {
  return {
    ...theme.typography.default.main,
    height: theme.typography.pxToRem(40),
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: 1,
    padding: `${theme.typography.pxToRem(13)} ${theme.typography.pxToRem(16)}`,
    color: theme.palette.bgDefault,
    background: theme.palette.white.main,
    borderRadius: `${theme.typography.pxToRem(4)}`,
    boxSizing: 'border-box',

    '&:hover': {
      backgroundColor: theme.palette.bgDefault,
      border: `${theme.typography.pxToRem(1)} solid ${theme.palette.white.main}`,
      padding: `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(15)}`,
      color: theme.palette.white.main
    }
  };
});
export default PrimaryButton;
