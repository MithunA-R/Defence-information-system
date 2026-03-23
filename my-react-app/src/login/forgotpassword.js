import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    if (email === "") {
      alert("Please enter your Email ID");
      return;
    }

    alert(`Password reset link has been sent to ${email}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>DEFENCE LOGIN</h2>
        <p>Forgot Password</p>

        <input
          type="email"
          placeholder="Enter your registered Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleReset}>Send Reset Link</button>

        
        <p
          className="forgot-password"
          onClick={() => navigate("/")}
        >
          ← Back to Login
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
