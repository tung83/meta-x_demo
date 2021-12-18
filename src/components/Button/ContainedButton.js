import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ContainedButton = styled(Button)(({ theme }) => {
  return {
    ...theme.typography.secondary,
    height: '29px',
    minWidth: 0,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: 1,

    color: theme.palette.bgDefault,
    backgroundColor: theme.palette.white.main,
    padding: '8px 10px',
    boxSizing: 'border-box',
    borderRadius: '20px',

    '&:hover': {
      backgroundColor: theme.palette.bgDefault,
      border: `1px solid ${theme.palette.white.main}`,
      padding: '7px 9px',
      color: theme.palette.white.main
    }
  };
});
export default ContainedButton;
