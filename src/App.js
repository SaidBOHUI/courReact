import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" />
        <Route path = "/projet" />
        <Route path = "/cv" />
        <Route path = "/contact" />
      </Routes>
    </Router>
  );
}

export default App;
