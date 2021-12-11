import './App.css';
import RenderRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <RenderRouter />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
