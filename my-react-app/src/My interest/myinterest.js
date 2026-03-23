import React, { useState } from "react";
import axios from "axios";
import "./myinterest.css";

function MyInterest() {
  const [formData, setFormData] = useState({
    full_name: "",
    dob: "",
    gender: "",
    interested_force: "",
    height: "",
    weight: "",
    contact_number: "",
    email: "",
    address: "",
    nationality: "Indian", 
    aadhar_number: "",
    education: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const h = parseInt(formData.height);
    const w = parseInt(formData.weight);
    const force = formData.interested_force;
    
    let minH = 0;
    const minW = 50; 

   
    if (force === "Army") minH = 162;
    else if (force === "Navy") minH = 157;
    else if (force === "AirForce") minH = 163;

   
    if (h < minH) {
      alert(` Sorry! You are not eligible. Minimum height required for ${force} is ${minH} cm.`);
      return; 
    }

   
    if (w < minW) {
      alert(` Sorry! You are not eligible. Minimum weight required is ${minW} kg.`);
      return;
    }


    try {
      const response = await axios.post("http://localhost:5000/api/submit-candidate", formData);
      if (response.data.success) {
        alert("Details Submitted Successfully!");
  
        setFormData({
          full_name: "", dob: "", gender: "", interested_force: "",
          height: "", weight: "", contact_number: "", email: "", address: "",
          nationality: "Indian", aadhar_number: "", education: ""
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed!");
    }
  };

  return (
    <div className="interest-container">
      <h2>My Defence Interest</h2>
      <p className="subtitle">Fill your details to get personalised defence exam guidance</p>

      <form className="interest-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Enter your name" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Education Qualification</label>
          <select name="education" value={formData.education} onChange={handleChange} required>
            <option value="">Select Education</option>
            <option value="10th Standard">10th Standard</option>
            <option value="12th Standard">12th Standard</option>
            <option value="Diploma">Diploma</option>
            <option value="Degree (UG)">Degree (UG)</option>
            <option value="Post Graduate (PG)">Post Graduate (PG)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Interested Force</label>
          <select name="interested_force" value={formData.interested_force} onChange={handleChange} required>
            <option value="">Select Force</option>
            <option value="Army">Indian Army</option>
            <option value="Navy">Indian Navy</option>
            <option value="AirForce">Indian Air Force</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Height (cm)</label>
            <input type="number" name="height" value={formData.height} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Weight (kg)</label>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Nationality</label>
            <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Aadhar Number</label>
            <input type="text" name="aadhar_number" value={formData.aadhar_number} onChange={handleChange} placeholder="12 Digit No" required />
          </div>
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input type="tel" name="contact_number" value={formData.contact_number} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea rows="2" name="address" value={formData.address} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="submit-btn">Check Eligibility & Submit</button>
      </form>
    </div>
  );
}

export default MyInterest;