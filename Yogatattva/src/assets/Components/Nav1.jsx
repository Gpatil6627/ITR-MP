import React from 'react';
import { Link } from 'react-router-dom';
import './Nav1.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/images/logo.jpg" alt="Logo" />
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="#">Help</Link>
        <Link to="/Explore">Explore</Link>
        <Link to="#">Login</Link>
        <Link to="#" className="signup">SignUp</Link>
      </nav>
    </header>
  );
}

export default Navbar;
