import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './pantry.styles.css'; // Assuming you have some styles for the cards

const Pantry = () => {
  const [pantryStaff, setPantryStaff] = useState([]);

  useEffect(() => {
    const fetchPantryStaff = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4000/api/v1/pantryStaff');
        setPantryStaff(response.data.data.pantryStaff);
        // const response = await fetch('http://127.0.0.1:4000/api/v1/pantry');
        // const data = await response.json();
        // setPatients(data.data.patients);
        // console.log("data", data)
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPantryStaff();
  }, []);

  return (
    <div className="pantryStaff">
      <h1>Patient Details</h1>
      <div className="pantry-cards">
        {pantryStaff.map((pantry) => (
          <div key={pantry._id} className="patient-card">
            <h2>{pantry.name}</h2>
            <p><strong>Name:</strong> {pantry.name}</p>
            <p><strong>Contact:</strong> {pantry.contactInfo}</p>
            <p><strong>Location:</strong> {pantry.location}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pantry;