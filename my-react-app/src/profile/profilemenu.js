import React, { useState } from "react";
import "./profilemenu.css";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {
  const navigate = useNavigate();
  const [logoutConfirm, setLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setLogoutConfirm(false);
    navigate("/login");
  };

  return (
    <>
  
      <div className="profile-card">

  
        <div className="profile-header">
          <div className="profile-icon">👤</div>

          <div className="profile-info">
            <h4>Mithun</h4>
            <p>
              Interest: <span className="completed">Completed ✔</span>
            </p>
          </div>
        </div>

  
        <div className="profile-actions">
          <button
            className="profile-btn"
            onClick={() => navigate("/my-interest")}
          >
            Update My Interest
          </button>

          <button
            className="logout-btn"
            onClick={() => setLogoutConfirm(true)}
          >
            Logout
          </button>
        </div>
      </div>

    
      {logoutConfirm && (
        <div className="logout-overlay">
          <div className="logout-modal">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>

            <div className="logout-actions">
              <button
                className="cancel-btn"
                onClick={() => setLogoutConfirm(false)}
              >
                Cancel
              </button>

              <button className="confirm-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileMenu;
