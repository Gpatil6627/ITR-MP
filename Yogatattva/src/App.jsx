import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home.jsx'; 
import About from './assets/Pages/About.jsx';
import Login from './assets/Pages/login.jsx';
import Explore from './assets/Explore/Explore.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/explore" element={<Explore/>} />
           <Route path="/login" element={<Login/>} /> 
        </Routes>
      </div>
    </Router>
  );
}
export default App;
