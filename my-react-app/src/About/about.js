import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About Defence Information Website</h1>
        <p>
          A trusted platform to guide and inspire defence aspirants across India.
        </p>
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          Defence Information Website is an educational and informational
          platform created to help students and aspirants who dream of
          serving the nation through the Indian Armed Forces.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide clear, structured, and reliable information
          about the Indian Army, Navy, and Air Force — including eligibility,
          exams, preparation strategies, and career guidance.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>Complete defence force information (Army, Navy, Air Force)</li>
          <li>Exam details - NDA, CDS, AFCAT & other entries</li>
          <li>Eligibility & physical standards overview</li>
          <li>Preparation tips for written exams & SSB</li>
          <li>Guidance for defence aspirants</li>
        </ul>

        <h2>Why This Platform?</h2>
        <p>
          Many aspirants lack proper guidance and structured information.
          This platform bridges that gap by presenting everything in a
          simple, student-friendly, and professional format.
        </p>

        <h2>Our Vision</h2>
        <p>
          To become a one-stop digital guide for defence aspirants and
          motivate young minds to serve the nation with honour, discipline,
          and courage.
        </p>
      </section>

      <footer className="about-footer">
        © Defence Information Website
      </footer>
    </div>
  );
}

export default About;
