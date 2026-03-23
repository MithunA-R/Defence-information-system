import React, { useState } from 'react';
import axios from 'axios';
import './MentorDashboard.css';

function MentorDashboard() {
    const [candidates, setCandidates] = useState([]);
    const [showTable, setShowTable] = useState(false);

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB'); 
    };

    const handleViewDetails = async () => {
        if (!showTable) {
            try {
                const response = await axios.get('http://localhost:5000/api/get-candidates');
                setCandidates(response.data);
                setShowTable(true);
            } catch (error) {
                console.error("Data fetch error:", error);
                alert("Database is empty or Server Error");
            }
        } else {
            setShowTable(false);
        }
    };

    return (
        <div className="mentor-container">
            <header className="dashboard-header">
                <h1>MENTOR CONTROL PANEL</h1>
                <p>Defence Academy Management System</p>
            </header>

            <div className="action-section">
                <button 
                    className={`view-btn ${showTable ? 'active' : ''}`} 
                    onClick={handleViewDetails}
                >
                    {showTable ? "Hide Candidate Details" : "View Candidate Details"}
                </button>
            </div>

            {showTable && (
                <div className="table-section">
                    <h3>Registered Candidates Interest List</h3>
                    <div className="table-responsive">
                        <table className="candidate-table">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Gender</th>
                                    <th className="dob-column">DOB</th>
                                    <th>Education</th>
                                    <th>Nationality</th>
                                    <th>Aadhar No</th>
                                    <th>Force</th>
                                    <th>H / W</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {candidates.length > 0 ? (
                                    candidates.map((c) => (
                                        <tr key={c.id}>
                                            <td>{c.full_name}</td>
                                            <td>{c.gender}</td>
                                            <td className="dob-cell">{formatDate(c.dob)}</td>
                                            <td style={{fontWeight: 'bold', color: '#1a73e8'}}>{c.education}</td>
                                            <td>{c.nationality}</td>
                                            <td>{c.aadhar_number}</td>
                                            <td>{c.interested_force}</td>
                                            <td style={{whiteSpace: 'nowrap'}}>{c.height}cm / {c.weight}kg</td>
                                            <td>{c.contact_number}</td>
                                            <td>{c.email}</td>
                                            <td>{c.address}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="11">No candidates found in database.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MentorDashboard;