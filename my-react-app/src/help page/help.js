import React from "react";
import { useNavigate } from "react-router-dom";
import "./help.css";

function HelpPage() {
  const navigate = useNavigate();

  return (
    <div className="help-page">

    
      <button
        className="close-btn"
        onClick={() => navigate("/")}
      >
        X
      </button>

      <h1>About Defence Information</h1>

      <p>
        Defence Information is a platform created to provide basic and reliable
        awareness about defence-related topics. It helps users understand the
        purpose, scope, and importance of defence services in a simple manner.
      </p>

      <p>
        This page shows a brief overview. Detailed information will be available
        inside the application.
      </p>

    </div>
  );
}

export default HelpPage;
