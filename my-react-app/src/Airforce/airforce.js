import React, { useState, useEffect } from "react"; 
import "./airforce.css";
import army1 from "./air1.jpg";
import army2 from "./air2.jpg";
import army3 from "./air3.jpg";

function AirForce() {
   const images = [army1, army2, army3];
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div className="airforce-page">

      <div className="airforce-content">
      <h2 className="airforce-main-title">
        DEFENCE INFORMATION - INDIAN AIR FORCE
      </h2>
   <div className="army-slider">
          <img src={images[currentImage]} alt="Indian Army" />
        </div>

      <p className="airforce-text">
        The Indian Air Force (IAF) is the aerial warfare branch of the Indian
        Armed Forces, responsible for securing Indian airspace and conducting
        air operations during war and peace. The Air Force plays a crucial role
        in national security through air superiority, rapid response,
        surveillance, and strategic strike capabilities.
      </p>

      <h3 className="airforce-subtitle">Roles & Responsibilities</h3>
      <ul className="airforce-list">
        <li>Defending Indian airspace from external threats</li>
        <li>Conducting air combat and strategic strike operations</li>
        <li>Providing air support to the Army and Navy</li>
        <li>Airlifting troops, equipment, and essential supplies</li>
        <li>Disaster relief, rescue, and humanitarian missions</li>
        <li>Participation in international air exercises</li>
      </ul>

      <h3 className="airforce-subtitle">Major Branches in the Indian Air Force</h3>
      <ul className="airforce-list">
        <li>Flying Branch - Fighter, Transport, and Helicopter pilots</li>
        <li>Ground Duty (Technical) - Aircraft maintenance and engineering</li>
        <li>Ground Duty (Non-Technical) - Administration, logistics, accounts</li>
        <li>Air Traffic Control (ATC) - Management of air operations</li>
      </ul>

      <h3 className="airforce-subtitle">Eligibility (Overview)</h3>
      <ul className="airforce-list">
        <li>Nationality: Indian Citizen</li>
        <li>Age: 16.5 - 26 years (varies by entry)</li>
        <li>Education: 10+2 / Graduation / Engineering</li>
        <li>Gender: Male & Female (as per entry rules)</li>
      </ul>

      <h3 className="airforce-subtitle">Major Air Force Exams & Entries</h3>
      <ul className="airforce-list">
        <li>NDA - National Defence Academy</li>
        <li>CDS - Combined Defence Services</li>
        <li>AFCAT - Air Force Common Admission Test</li>
        <li>Agniveer (Air Force)</li>
      </ul>

      <h3 className="airforce-subtitle">Selection Process</h3>
      <ol className="airforce-list">
        <li>Written Examination (NDA / CDS / AFCAT)</li>
        <li>AFSB Interview (Air Force Selection Board)</li>
        <li>Medical Examination</li>
        <li>Final Merit List</li>
      </ol>

      <h3 className="airforce-subtitle">Physical Standards</h3>
      <ul className="airforce-list">
        <li>Minimum height and weight as per Air Force standards</li>
        <li>Excellent eyesight (especially for Flying Branch)</li>
        <li>Overall medical fitness and endurance</li>
      </ul>

      <h3 className="airforce-subtitle">Salary & Ranks</h3>
      <p className="airforce-text">
        The Indian Air Force follows a structured rank system from Flying Officer
        to Air Chief Marshal. Pay is as per the 7th Pay Commission, along with
        flying allowances, technical allowances, medical benefits, housing,
        pension, and long-term career security.
      </p>

      <hr className="airforce-divider" />


      <h2 className="airforce-main-title">
        DEFENCE PREPARATION - INDIAN AIR FORCE
      </h2>

      <h3 className="airforce-subtitle">Daily Current Affairs</h3>
      <p className="airforce-text">
        Air Force aspirants should stay updated with aviation news,
        defence technology, national security issues, space and satellite
        developments, and major Air Force exercises.
      </p>

      <h3 className="airforce-subtitle">Mock Tests & Practice</h3>
      <p className="airforce-text">
        Mock tests help candidates understand exam patterns, improve
        time management, and increase accuracy. Regular practice builds
        confidence and exam readiness.
      </p>

      <h3 className="airforce-subtitle">Group Discussion (GD) Topics</h3>
      <ul className="airforce-list">
        <li>Role of air power in modern warfare</li>
        <li>Technology and defence innovation</li>
        <li>India's air defence capability</li>
        <li>Youth and national security</li>
      </ul>

      <h3 className="airforce-subtitle">Interview & AFSB Preparation</h3>
      <p className="airforce-text">
        The AFSB interview evaluates Officer Like Qualities such as leadership,
        confidence, decision-making ability, honesty, and mental toughness.
        Candidates should focus on personality development and clear thinking.
      </p>

      <h3 className="airforce-subtitle">Fitness & Physical Training</h3>
      <p className="airforce-text">
        Physical fitness is essential for Air Force aspirants. Daily running,
        strength training, flexibility exercises, good eyesight care, and a
        disciplined lifestyle are key to success.
      </p>

      <hr className="airforce-divider" />

      <p className="airforce-footer">
        © Defence Information Website
      </p>
</div>
    </div>
  );
}

export default AirForce;
