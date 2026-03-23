import React, { useState, useEffect } from "react"; 
import "./army.css";


import army1 from "./img1.jpg";
import army2 from "./img7.jpg";
import army3 from "./img2.jpg";

function Army() {
  const images = [army1, army2, army3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="army-page">
  <div className="army-content">

      <h2 className="army-main-title">
        DEFENCE INFORMATION - INDIAN ARMY
      </h2>
       <div className="army-slider">
          <img src={images[currentImage]} alt="Indian Army" />
        </div>


      <p className="army-text">
        The Indian Army is the land-based branch of the Indian Armed Forces.
        It plays a vital role in protecting the nation’s sovereignty,
        territorial integrity, and unity. The Indian Army operates under
        the Ministry of Defence and works alongside the Navy and Air Force
        to ensure national security.
      </p>

      <h3 className="army-subtitle">Roles & Responsibilities</h3>
      <ul className="army-list">
        <li>Defending India's borders during war and conflict</li>
        <li>Counter-insurgency and counter-terrorism operations</li>
        <li>Disaster relief and humanitarian assistance</li>
        <li>Supporting civil authorities during emergencies</li>
        <li>United Nations peacekeeping missions</li>
      </ul>

      <h3 className="army-subtitle">Major Branches in the Army</h3>
      <ul className="army-list">
        <li>Infantry-Frontline combat forces</li>
        <li>Armoured Corps - Tank and mechanised units</li>
        <li>Artillery - Guns, rockets, and missile systems</li>
        <li>Engineers - Combat engineering and infrastructure</li>
        <li>Signals - Military communication systems</li>
        <li>Army Service Corps - Logistics and transport</li>
        <li>Medical Corps - Healthcare services</li>
      </ul>

      <h3 className="army-subtitle">Eligibility (Overview)</h3>
      <ul className="army-list">
        <li>Nationality: Indian Citizen</li>
        <li>Age: 16.5 - 25 years (varies by entry)</li>
        <li>Education: 10+2 or Graduation</li>
        <li>Gender: Male & Female (selected entries)</li>
      </ul>

      <h3 className="army-subtitle">Major Army Exams</h3>
      <ul className="army-list">
        <li>NDA - National Defence Academy</li>
        <li>CDS - Combined Defence Services</li>
        <li>Technical Entry Schemes (TES / TGC)</li>
        <li>Agniveer Recruitment</li>
      </ul>

      <h3 className="army-subtitle">Selection Process</h3>
      <ol className="army-list">
        <li>Written Examination</li>
        <li>SSB Interview (5 Days)</li>
        <li>Medical Examination</li>
        <li>Final Merit List</li>
      </ol>

      <h3 className="army-subtitle">Physical Standards</h3>
      <ul className="army-list">
        <li>Height, weight & chest as per standards</li>
        <li>Good eyesight and medical fitness</li>
        <li>High stamina and endurance</li>
      </ul>

      <h3 className="army-subtitle">Salary & Ranks</h3>
      <p className="army-text">
        The Indian Army follows a structured rank system from Lieutenant
        to General. Salaries are based on the 7th Pay Commission along with
        allowances, pension benefits, medical facilities, and job security.
      </p>

 


      <h2 className="army-main-title">
        DEFENCE PREPARATION - INDIAN ARMY
      </h2>

      <h3 className="army-subtitle">Daily Current Affairs</h3>
      <p className="army-text">
        Aspirants should regularly follow national and international news,
        defence updates, government policies, and security issues.
      </p>

      <h3 className="army-subtitle">Mock Tests & Practice</h3>
      <p className="army-text">
        Mock tests improve time management and confidence. Consistent
        practice is the key to success.
      </p>

      <h3 className="army-subtitle">Group Discussion (GD) Topics</h3>
      <ul className="army-list">
        <li>National security</li>
        <li>Youth and defence</li>
        <li>Technology in warfare</li>
        <li>Social and economic issues</li>
      </ul>

      <h3 className="army-subtitle">Interview & SSB Preparation</h3>
      <p className="army-text">
        SSB tests leadership, decision-making, confidence, and honesty.
        Candidates should remain calm and disciplined.
      </p>

      <h3 className="army-subtitle">Fitness & Physical Training</h3>
      <p className="army-text">
        Daily running, strength training, healthy diet, and mental
        toughness are essential for Army aspirants.
      </p>

      <hr className="army-divider" />

      <p className="army-footer">
        © Defence Information Website
      </p>
    </div>
    </div>
  );
}

export default Army;
