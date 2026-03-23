import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./landingpage/landingpage";
import Login from "./login/login";
import HelpPage from "./help page/help";
import ForgotPassword from "./login/forgotpassword";
import Home from "./home/home";
import Army from "./Army/army";
import Navy from "./Navy/Navy";
import AirForce from "./Airforce/airforce";

import MyInterest from "./My interest/myinterest";
import About from "./About/about";
import MentorDashboard from './Dashboard/MentorDashboard';

<Route path="/mentor-dashboard" element={<MentorDashboard />} />


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/army" element={<Army />} />
        <Route path="/navy" element={<Navy />} />
        <Route path="/airforce" element={<AirForce />} />


        <Route path="/my-interest" element={<MyInterest />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />


      </Routes>
    </Router>
  );
}

export default App;
