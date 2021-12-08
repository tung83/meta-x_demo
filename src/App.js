import logo from './logo.svg';
import './App.css';
import RenderRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <RenderRouter />
        </Router>
      </header>
    </div>
  );
}

export default App;
