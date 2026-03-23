const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mithun@2028', 
    database: 'defence_db'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to MySQL Database! ');
    }
});


app.post('/api/mentor-login', (req, res) => {
    const { username, password } = req.body;
    
    console.log("Login Attempt for:", username);

    const sql = "SELECT * FROM mentors WHERE username = ? AND password = ?";
    
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error("Login Query Error:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        
        if (result.length > 0) {
            console.log("Login Success! ");
            res.json({ success: true, message: "Login Successful!" });
        } else {
            console.log("Login Failed: User not found ");
            res.status(401).json({ success: false, message: "Invalid username or password" });
        }
    });
});


app.post('/api/submit-candidate', (req, res) => {
    
    const { 
        full_name, dob, gender, interested_force, 
        height, weight, contact_number, email, address,
        education, nationality, aadhar_number 
    } = req.body;

    
    const sql = `INSERT INTO candidates 
    (full_name, dob, gender, interested_force, height, weight, contact_number, email, address, education, nationality, aadhar_number) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
        full_name, dob, gender, interested_force, 
        height, weight, contact_number, email, address,
        education, nationality, aadhar_number
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Insert error:", err);
            return res.status(500).json({ success: false, error: err.message });
        }
        res.json({ success: true, message: "Saved Successfully! " });
    });
});


app.get('/api/get-candidates', (req, res) => {
    const sql = "SELECT * FROM candidates ORDER BY id DESC";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Fetch error:", err);
            return res.status(500).json({ success: false, error: err.message });
        }
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000 ");
});