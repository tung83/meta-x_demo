import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const SuspendFallbackLoading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: 'var(--app-height)',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default SuspendFallbackLoading;
