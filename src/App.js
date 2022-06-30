// import logo from './logo.svg'; 
import './App.css';
import React, {lazy, Suspense} from 'react';
import Loader from './components/Loader'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const Home = lazy(() => import ('./pages/Home'));
const Projet = lazy(() => import ('./pages/Projet'));
const Cv = lazy(() => import ('./pages/Cv'));
const Contact = lazy(() => import ('./pages/Contact'));
const Error = lazy(() => import ('./pages/Error'));

function App() {
  return (
    <Suspense fallback = {<Loader />}>
      <Router>
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/projet" element = {<Projet />}/>
            <Route path = "/cv" element = {<Cv />}/>
            <Route path = "/contact" element = {<Contact />}/>
            <Route path = "*" element = {<Error />}/>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
