import React from 'react';
import './Explore.css'; 
import Nav2 from '../Components/Nav2';
import '../../App.css'; 

const Explore = () => {
  return (
    <div className="Explore-Bg">
      <section className="explore-header">
        <Nav2/>
        <div className="explore-logo">
          <img src="/images/logo.jpg" alt="Yoga Logo" />
        </div>
        <h1 className="main-heading">Explore Your Yoga Journey</h1>
        <p className="subheading">
          <i><b>Discover ancient practices for modern living. Find peace, strength and balance</b></i>
        </p>
      </section>

      {/* Yoga Cards Section */}
      <section className="yoga-cards-container">
        <div className="yoga-card">
          <img src="/images/yoga.png" alt="Yoga Asanas" />
          <h2>Yoga Asanas</h2>
          <p>Explore over 50 traditional yoga poses with detailed instructions, benefits, and variations.</p>
      
        </div>

        <div className="yoga-card">
          <img src="/images/meditation.png" alt="Meditation and Mindfulness" />
          <h2>Meditation & Mindfulness</h2>
          <p>Guided sessions from 3 to 60 minutes to cultivate presence and inner calm.</p>
          
        </div>

        <div className="yoga-card">
          <img src="/images/pranayam.png" alt="Pranayama" />
          <h2>Pranayama</h2>
          <p>Master the ancient art of yogic breathing techniques for vitality and focus.</p>
         
        </div>

        <div className="yoga-card">
          <img src="/images/mantra.png" alt="Mantra Library" />
          <h2>Mantra Library</h2>
          <p>Collection of powerful mantras with meanings, pronunciations, and audio recordings.</p>
     
        </div>
      </section>
    </div>
  );
};
export default Explore;
