import React from 'react';
// adjust path if needed
import './Login.css';
import '../../App.css'; 

const Login = () => {
  return (
    <div>
      {/* Fixed background image */}
      <div className="bg-image"></div>

      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo"></div>
        <ul>
          <li>
            <a href="/home">Home
            </a></li>
          <li>
            <a href="/about">About
            </a></li>
            <li>
            <a href="/explore">Explore
            </a></li>
            <li>
            <a href="/">Login
            </a></li>
            <li>
            <a href="#">SignUp
            </a></li>
          
        </ul>
      </header>

      {/* Login Form */}
      <div className="login-container">
        <h1>Step Into Wellness</h1>
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <input type="email" required placeholder=" " id="email" />
              <label htmlFor="email">Enter Email</label>
            </div>
            <div className="input-group">
              <input type="password" required placeholder=" " id="password" />
              <label htmlFor="password">Enter Password</label>
            </div>
            <button className="signup-btn" type="submit">
              SignUp
            </button>
            <p className="switch">
              No Account? <a href="#">Sign up</a>
            </p>
            <button type="button" className="google-btn">
              <span className="google-icon"></span>
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
