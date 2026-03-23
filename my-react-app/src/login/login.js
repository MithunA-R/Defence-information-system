import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (role === "" || username === "" || password === "") {
      alert("Please fill all fields!");
      return;
    }

    if (role === "Mentor") {
      try {
        const response = await axios.post("http://localhost:5000/api/mentor-login", {
          username,
          password,
        });

        if (response.data.success) {
          alert("Mentor Login Successful! 🎉");
          navigate("/mentor-dashboard"); 
        }
      } catch (error) {
        alert("Invalid Mentor Credentials!");
      }
    } else {
      alert("Candidate Login Successful!");
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>DEFENCE LOGIN</h2>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="Mentor">Mentor</option>
          <option value="Candidate">Candidate</option>
        </select>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <small className="password-hint">
          Password must have Uppercase, Lowercase, Special character & minimum 8
          characters
        </small>

        <p
          className="forgot-password"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;