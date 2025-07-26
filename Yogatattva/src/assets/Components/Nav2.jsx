import React from 'react';
import {Link} from 'react-router-dom';
import './Nav2.css'; 

const Nav2 = () => {
  return (
    <header className="explore-navbar">
      <nav className="explore-nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="#">Help</Link>
        <Link to="/Explore">Explore</Link>
        <Link to="login">Login</Link>
        <Link to="#" className="signup">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Nav2;
