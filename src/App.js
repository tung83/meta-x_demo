import './App.css';
import RenderRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';
import { setAppHeight } from './hooks/screen';
const App = () => {
  const queryClient = new QueryClient();
  setAppHeight();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <RenderRouter />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
