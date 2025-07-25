import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Nav1.jsx';
import Nav2 from './assets/Components/Nav2.jsx';
import Home from './assets/Pages/Home.jsx'; 
import About from './assets/Pages/About.jsx';
import Explore from './assets/Explore/Explore.jsx'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/Explore" element={<Explore/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
