import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const PrimaryButton = styled(Button)(({ theme }) => {
  return {
    ...theme.typography.default.main,
    height: '40px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: 1,
    padding: '13px 16px',
    color: theme.palette.bgDefault,
    background: theme.palette.white.main,
    borderRadius: '4px',
    boxSizing: 'border-box',

    '&:hover': {
      backgroundColor: theme.palette.bgDefault,
      border: `1px solid ${theme.palette.white.main}`,
      padding: '12px 15px',
      color: theme.palette.white.main
    }
  };
});

PrimaryButton.propTypes = {};
export default PrimaryButton;
