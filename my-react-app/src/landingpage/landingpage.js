import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">

  
      <button
        className="help-btn"
        onClick={() => navigate("/help")}
      >
        Help
      </button>

    
      <button
        className="transparent-btn get-started"
        onClick={() => navigate("/login")}
      >
        Get Started
      </button>

    </div>
  );
}

export default LandingPage;
