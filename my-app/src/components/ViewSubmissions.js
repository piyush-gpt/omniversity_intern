import React from 'react';
import '../css/ViewSubmissions.css'; // Import the CSS file
import {  useNavigate } from 'react-router-dom';
const ViewSubmissions = () => {
    const navigate=useNavigate();
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    return (
        <div className="container">
            <h1 className="header">Submissions</h1>
            <button className="back-button" onClick={() => navigate('/')}>Back to Form</button>
            {submissions.map((submission, index) => (
                <div key={index} className="submission">
                    <p>Name: {submission.name}</p>
                    <p>Email: {submission.email}</p>
                    <p>Message: {submission.message}</p>
                    <p>CV File: {submission.fileName || 'No file uploaded'}</p>
                </div>
            ))}
        </div>
    );
};

export default ViewSubmissions;
