import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const OutlineButton = styled(Button)(({ theme }) => {
  return {
    ...theme.typography.secondary,
    height: theme.typography.pxToRem(29),
    minWidth: 0,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 600,
    lineHeight: 1,

    backgroundColor: theme.palette.bgDefault,
    border: `${theme.typography.pxToRem(1)} solid ${theme.palette.white.main}`,
    padding: `${theme.typography.pxToRem(7)} ${theme.typography.pxToRem(9)}`,
    color: theme.palette.white.main,
    boxSizing: 'border-box',
    borderRadius: `${theme.typography.pxToRem(20)}`,

    '&:hover': {
      border: 'none',
      color: theme.palette.bgDefault,
      backgroundColor: theme.palette.white.main,
      padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(10)}`
    }
  };
});
export default OutlineButton;
