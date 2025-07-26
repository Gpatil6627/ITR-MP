import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Navbar with React Router links */}
      <header className="navbar">
        <div className="logo">
          {/* Logo background image set by CSS */}
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
        </ul>
      </header>

      {/* Background video */}
      <video autoPlay muted loop id="bgVideo">
        <source src="/images/video1.mp4" type="video/mp4" />
      </video>

      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="small-heading">Start a Happy Life</h2>
          <h1 className="main-heading">
            Transform Your Mind,<br />Body &amp; Soul—One Breath at a Time
          </h1>
          <a href="#" className="get-started-btn">Get Started</a>
        </div>
      </section>

      {/* Bottom section */}
      <section className="bottom">
        <div className="bottom-img">
          <img src="/images/hm.png" className="hm" alt="yogaWomen" />
        </div>
        <div className="right">
          <h2>
            Shape Your<br />
            <span>Perfect Body with YogaTattva</span>
          </h2>
          <p className="quote">
            Yoga is a light, which once lit will never dim.<br />
            The better your <em>practice</em>, the brighter your <em>flame</em> with YogaTattva
          </p>
          <div className="stats">
            <div className="stat-box">
              <img src="/images/client.png" alt="Client Icon" className="icon-img" />
              <h3>99+</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-box">
              <img src="/images/asan.png" alt="Asan Icon" className="icon-img" />
              <h3>25+</h3>
              <p>Unique Asanas</p>
            </div>
            <div className="stat-box">
              <img src="/images/video.png" alt="Video Icon" className="icon-img" />
              <h3>35+</h3>
              <p>Video Tutorials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
