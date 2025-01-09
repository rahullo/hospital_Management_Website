import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.styles.css'; // Assuming you have some styles for the cards

const Dashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
        console.log("fetching patients")
      try {
        // const response = await axios.get('http://127.0.0.1:4000/api/v1/patients');
        // setPatients(response.data.data.patients);
        const response = await fetch('http://127.0.0.1:4000/api/v1/patients');
        const data = await response.json();
        setPatients(data.data.patients);
        console.log("data", data)
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="dashboard">
      <h1>Patient Details</h1>
      <div className="patient-cards">
        {patients.map((patient) => (
          <div key={patient._id} className="patient-card">
            <h2>{patient.name}</h2>
            <p><strong>Diseases:</strong> {patient.diseases.join(', ')}</p>
            <p><strong>Allergies:</strong> {patient.allergies.join(', ')}</p>
            <p><strong>Room Number:</strong> {patient.roomNumber}</p>
            <p><strong>Bed Number:</strong> {patient.bedNumber}</p>
            <p><strong>Floor Number:</strong> {patient.floorNumber}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Contact Information:</strong> {patient.contactInfo}</p>
            <p><strong>Emergency Contact:</strong> {patient.emergencyContact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;