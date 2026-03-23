import React, { useState, useEffect } from "react"; 
import "./Navy.css";

import army1 from "./img1.jpg";
import army2 from "./img2.jpg";
import army3 from "./img3.jpg";
function Navy() {
    const images = [army1, army2, army3];
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div className="navy-page">
 <div className="navy-content">

      <h2 className="navy-main-title">
        DEFENCE INFORMATION - INDIAN NAVY
      </h2>
      <div className="army-slider">
          <img src={images[currentImage]} alt="Indian Army" />
        </div>


      <p className="navy-text">
        The Indian Navy is the maritime arm of the Indian Armed Forces,
        responsible for protecting India's coastline, territorial waters,
        and maritime interests. It plays a critical role in national security,
        sea control, and power projection across the Indian Ocean Region.
      </p>

      <h3 className="navy-subtitle">Roles & Responsibilities</h3>
      <ul className="navy-list">
        <li>Protecting India's maritime borders and sea routes</li>
        <li>Ensuring naval dominance in the Indian Ocean</li>
        <li>Anti-piracy and maritime surveillance operations</li>
        <li>Humanitarian assistance and disaster relief</li>
        <li>Participation in international naval exercises</li>
      </ul>

      <h3 className="navy-subtitle">Major Branches in the Indian Navy</h3>
      <ul className="navy-list">
        <li>Executive Branch - Ship command and operations</li>
        <li>Engineering Branch - Ship and submarine maintenance</li>
        <li>Electrical Branch - Weapons, radar, electronics</li>
        <li>Aviation Branch - Naval pilots and observers</li>
        <li>Submarine Arm - Underwater warfare</li>
        <li>Logistics Branch - Supply and administration</li>
      </ul>

      <h3 className="navy-subtitle">Eligibility (Overview)</h3>
      <ul className="navy-list">
        <li>Nationality: Indian Citizen</li>
        <li>Age: 16.5 - 25 years (varies by entry)</li>
        <li>Education: 10+2 / Graduation / Engineering</li>
        <li>Gender: Male & Female (as per entry scheme)</li>
      </ul>

      <h3 className="navy-subtitle">Major Navy Exams & Entries</h3>
      <ul className="navy-list">
        <li>NDA - National Defence Academy</li>
        <li>CDS - Combined Defence Services</li>
        <li>Technical Entry Schemes</li>
        <li>Agniveer (Navy)</li>
      </ul>

      <h3 className="navy-subtitle">Selection Process</h3>
      <ol className="navy-list">
        <li>Written Examination</li>
        <li>SSB Interview</li>
        <li>Medical Examination</li>
        <li>Final Merit List</li>
      </ol>

      <h3 className="navy-subtitle">Physical Standards</h3>
      <ul className="navy-list">
        <li>Height and weight as per naval standards</li>
        <li>Good eyesight and medical fitness</li>
        <li>Ability to withstand sea conditions</li>
      </ul>

      <h3 className="navy-subtitle">Salary & Ranks</h3>
      <p className="navy-text">
        The Indian Navy follows a structured rank system from Sub-Lieutenant
        to Admiral. Salaries are based on the 7th Pay Commission along with
        allowances, medical facilities, accommodation, pension, and job security.
      </p>


    
      <h2 className="navy-main-title">
        DEFENCE PREPARATION - INDIAN NAVY
      </h2>

      <h3 className="navy-subtitle">Daily Current Affairs</h3>
      <p className="navy-text">
        Navy aspirants must stay updated with maritime security,
        naval exercises, submarines, warships, and defence policies.
      </p>

      <h3 className="navy-subtitle">Mock Tests & Practice</h3>
      <p className="navy-text">
        Mock tests help improve speed, accuracy, and confidence.
      </p>

      <h3 className="navy-subtitle">Group Discussion (GD) Topics</h3>
      <ul className="navy-list">
        <li>Maritime security of India</li>
        <li>Role of Navy in national defence</li>
        <li>Technology in naval warfare</li>
        <li>Youth and armed forces</li>
      </ul>

      <h3 className="navy-subtitle">Interview & SSB Preparation</h3>
      <p className="navy-text">
        SSB evaluates leadership, confidence, honesty, and decision-making skills.
      </p>

      <h3 className="navy-subtitle">Fitness & Physical Training</h3>
      <p className="navy-text">
        Running, swimming, strength training, and discipline are essential
        for naval service.
      </p>

      <hr className="navy-divider" />

      <p className="navy-footer">
        © Defence Information Website
      </p>

    </div>
    </div>
  );
}

export default Navy;
