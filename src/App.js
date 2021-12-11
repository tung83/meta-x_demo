import logo from './logo.svg';
import './App.css';
import RenderRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>{`spacing ${theme.background}`}</span>
          <Router>
            <RenderRouter />
          </Router>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
