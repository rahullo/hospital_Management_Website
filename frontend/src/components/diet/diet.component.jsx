import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './diet.styles.css'; // Assuming you have some styles for the cards

const Diet = () => {
  const [diet, setDiet] = useState([]);

  useEffect(() => {
    const fetchDiet = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4000/api/v1/dietCharts');
        setDiet(response.data.data.dietCharts);
        // const response = await fetch('http://127.0.0.1:4000/api/v1/pantry');
        // const data = await response.json();
        // setPatients(data.data.patients);
        // console.log("data", data)
      } catch (error) {
        console.error('Error fetching Diets:', error);
      }
    };

    fetchDiet();
  }, []);

  return (
    <div className="diet">
      <h1>Patient Diet</h1>
      <div className="diet-cards">
        {diet.map((meal) => (
          <div key={meal._id} className="patient-card">
            <h2>{meal.name}</h2>
            <p><strong>Patient:</strong> {meal.patient}</p>
            <p><strong>Morning Meal:</strong> {meal.morningMeal}</p>
            <p><strong>Everning Meal:</strong> {meal.eveningMeal}</p>
            <p><strong>Night Meal:</strong> {meal.nightMeal}</p>
            <p><strong>Ingredients:</strong> {meal.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> {meal.instructions}</p>

            {/* "patient": "677ebf2086253b6f8c1a1a09", 
            /* "morningMeal": "Boiled eggs and avocado toast",
                "eveningMeal": "Quinoa salad with chickpeas",
                "nightMeal": "Grilled chicken with steamed broccoli",
                "ingredients": [
                    "eggs",
                    "avocado",
                    "bread",
                    "quinoa",
                    "chickpeas",
                    "chicken",
                    "broccoli"
                ],
                "instructions": "Serve meals with adequate hydration options." */}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diet;