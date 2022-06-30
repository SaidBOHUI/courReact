// import logo from './logo.svg'; 
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import Projet from './components/Projet'
import Cv from './components/Cv'
import Contact from './components/Contact'
import Error from './components/Error'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/projet" element = {<Projet />}/>
        <Route path = "/cv" element = {<Cv />}/>
        <Route path = "/contact" element = {<Contact />}/>
        <Route path = "*" element = {<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
