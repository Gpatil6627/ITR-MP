import React from 'react';
import './About.css'; 
import Navbar from '../Components/Nav1';
import '../../App.css'; 

function About() {
  return (
    <>
    <Navbar/>
      <section className="about-section">
        <div className="about-card">
          <img src="/images/Abtbg.png" alt="Meditation Background" className="about-bg" />
          <div className="about-text">
            <h1>About Us</h1>
            <p>Our journey of mindful living begins here.</p>
          </div>
          <img src="/images/leaves.png"alt="Decorative Leaves" className="leaves-decor" />
        </div>
      </section>


      <section className="intention-section">
        <div className="container">
          <h2 className="section-title">Our Intension:<span>Your Journey</span></h2>
          <p className="intention-text">
            YogaTattva is our heartfelt first venture into the world of wellness and web design — a space where yoga flows with the rhythm of your day.
            Created with love and intention, this website offers curated asana sequences for morning, afternoon, and night — each accompanied by step-by-step guidance and exclusive video content. Whether you’re just beginning or deepening your practice, YogaTattva is designed to support mindful movement from sunrise to moonlight.
          </p>
        </div>

        <div className="mission-section">
          <div className="mission-text">
            <h3><span>Our Mission</span></h3>
            <p>
          To make yoga a harmonious part of everyday life by offering thoughtfully scheduled practices morning, afternoon, and night—that empower users to move, breathe, and grow mindfully.
          <br></br>
          Through accessible guidance and serene design, we aim to inspire consistency, nurture wellbeing, and honor the timeless roots of yoga.
          </p>
          </div>
          <div className="mission-image">
            <img src="/images/mission.png"alt="Group Yoga Session" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <div className="vision-section">
        <div className="vision-image">
          <img src="/images/vision.png"alt="Vision" />
        </div>
        <div className="vision-text">
          <h3><span>Our Vision</span></h3>
         <p className="bold-italic">
            Creating a space where wellness isn't scheduled — it’s lived.
        </p>
          <p>
            At YogaTattva, our vision is to make yoga a natural part of everyday living not confined to a schedule, but embraced as a flowing rhythm that moves with the day.
          <br></br>
          Our aim is to create a sanctuary where wellness feels seamless, soulful, and accessible to all — guided by tradition, supported by design, and lived through mindfulness.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h4 className="subheading">Our Specialties</h4>
        <h2 className="whmain-heading">Why Choose Us</h2>

        <div className="features-container">
          {/* Left column */}
          <div className="features-column">
            <div className="feature-box">
              <h3>Trust & Transparency <img src="/images/checkmark.png"alt="check" className="chk" /></h3>
              <p>Whether it's a mindful yoga journey or safeguarding your online space...</p>
            </div>
            <div className="feature-box">
              <h3>User Experience First <img src="/images/checkmark.png"alt="check" className="chk" /></h3>
              <p>Every animation, layout, and hover effect is tested and tweaked...</p>
            </div>
            <div className="feature-box">
              <h3>Your Practice, Your Way <img src="/images/checkmark.png" alt="check" className="chk" /></h3>
              <p>Save your favorites, revisit anytime.</p>
            </div>
          </div>

          {/* Center image */}
          <div className="feature-image">
            <img src="/images/quesmark.jpg"alt="Meditating Yoga Girl" />
          </div>

          {/* Right column */}
          <div className="features-column">
            <div className="feature-box">
              <h3>Step-by-Step Asanas <img src="/images/checkmark.png" alt="check" /></h3>
              <p>Clear guidance for every pose...</p>
            </div>
            <div className="feature-box">
              <h3>Expertise + Empathy <img src="/images/checkmark.png" alt="check" /></h3>
              <p>We combine deep technical knowledge with a thoughtful...</p>
            </div>
            <div className="feature-box">
              <h3>Safe & Mindful Space <img src="/images/checkmark.png"alt="check" /></h3>
              <p>Your data stays private, your experience stays personal.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
