import React, { useState } from "react";
import "./home.css";

import armyImg from "./army.jpg";
import navyImg from "./indian navy.jpg";
import airforceImg from "./indian airforce.jpg";

import { useNavigate } from "react-router-dom";
import ProfileMenu from "../profile/profilemenu";

function Home() {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="home-container">

 
      <nav className="navbar">
        <h2>DEFENCE PORTAL</h2>

        <ul>
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/about")}>About Us</li>

          <li className="profile-nav">
            <span
              className="profile-text"
              onClick={() => setShowProfile(!showProfile)}
            >
              Profile
            </span>

           
            {showProfile && (
              <div className="profile-dropdown">
                <ProfileMenu close={() => setShowProfile(false)} />
              </div>
            )}
          </li>
        </ul>
      </nav>


      <section className="hero">
        <h1>WELCOME TO</h1>
        <h2>DEFENCE CAREER PORTAL</h2>
        <p>"Your complete guide to Indian Defence"</p>
      </section>

  
      <section className="section">
        <div className="overview">

          <div className="force-card" onClick={() => navigate("/army")}>
            <img src={armyImg} alt="Indian Army" />
            <h4>Indian Army</h4>
            <p>
              Protects land borders and ensures national security through
              discipline, courage, and sacrifice.
            </p>
          </div>

          <div className="force-card" onClick={() => navigate("/navy")}>
            <img src={navyImg} alt="Indian Navy" />
            <h4>Indian Navy</h4>
            <p>
              Safeguards maritime borders and ensures dominance across the
              Indian Ocean Region.
            </p>
          </div>

          <div className="force-card" onClick={() => navigate("/airforce")}>
            <img src={airforceImg} alt="Indian Air Force" />
            <h4>Indian Air Force</h4>
            <p>
              Defends Indian airspace and delivers rapid response with advanced
              air power.
            </p>
          </div>

        </div>
      </section>


      <section className="why-defence">
        <h2>Why Choose Defence?</h2>
        <p className="subtitle">
          Serving the nation is not just a career — it is honour, responsibility,
          and lifelong pride.
        </p>

        <div className="defence-features">
          <div className="feature-box">
            <h4>Honour & Pride</h4>
            <p>Wear the uniform with pride and serve the nation.</p>
          </div>

          <div className="feature-box">
            <h4>Secure Career</h4>
            <p>Job security, pensions, and lifelong benefits.</p>
          </div>

          <div className="feature-box">
            <h4>Leadership & Discipline</h4>
            <p>Develop leadership, courage, and confidence.</p>
          </div>
        </div>

        <div className="defence-stats">
          <div className="stat-card">
            <span>👥</span>
            <h3>12+ Lakh</h3>
            <p>Indian Army Soldiers</p>
          </div>

          <div className="stat-card">
            <span>🚢</span>
            <h3>150+</h3>
            <p>Indian Navy Ships</p>
          </div>

          <div className="stat-card">
            <span>✈️</span>
            <h3>600+</h3>
            <p>Indian Air Force Aircraft</p>
          </div>
        </div>
      </section>

  
      <section className="section">
        <div className="my-interest-card">
          <h2>My Interest</h2>
          <p>
            Tell us about yourself and your defence exam interest to get
            personalised guidance.
          </p>

          <button
            className="interest-btn"
            onClick={() => navigate("/my-interest")}
          >
            Explore My Interest →
          </button>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <h3>Defence Information</h3>

          <p className="footer-quote">
            "Discipline today, victory tomorrow."
          </p>

          <ul className="footer-links">
            <li onClick={() => navigate("/army")}>Indian Army</li>
            <li onClick={() => navigate("/navy")}>Indian Navy</li>
            <li onClick={() => navigate("/airforce")}>Indian Air Force</li>
            <li onClick={() => navigate("/about")}>About Us</li>
          </ul>

          <p className="footer-contact">
            Contact us: <span>mentor@gmail.com</span>
          </p>

          <p className="footer-copy">
            © 2026 Defence Information Website. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}



export default Home;
