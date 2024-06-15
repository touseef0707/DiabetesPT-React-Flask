import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

// Function Based Results Component
const Results = () => {

  // Accessing the location object to get the state
  const location = useLocation();

  // Destructuring the state object
  const { pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction, age, predictionResult } = location.state || {};

  // Function to generate suggestions based on the prediction result
  const generateSuggestions = () => {
    if (predictionResult === 'Diabetic') {
      return [
        "Consult a healthcare professional for proper diagnosis and treatment.",
        "Manage your diet and monitor carbohydrate intake.",
        "Regularly check blood sugar levels and follow prescribed medications.",
      ];
    } else {
      return [
        "Maintain a healthy diet and exercise regularly.",
        "Monitor your blood sugar levels regularly.",
        "Consider consulting a healthcare professional for further advice.",
      ];
    }
  };

  // Generating suggestions based on the prediction result
  const suggestions = generateSuggestions();

  return (
    <div className="container mt-5">
      <h2 >Report & Suggestions</h2>
      <div className="row my-3">
        <div className="col-md-6">
          <div className="row my-3">
            <div className="col-6">Pregnancies:</div>
            <div className="col-6">{pregnancies}</div>
          </div>
          <div className="row my-3">
            <div className="col-6">Glucose:</div>
            <div className="col-6">{glucose}</div>
          </div>
          <div className="row my-3">
            <div className="col-6">Blood Pressure:</div>
            <div className="col-6">{bloodPressure}</div>
          </div>
          <div className="row my-3">
            <div className="col-6">Skin Thickness:</div>
            <div className="col-6">{skinThickness}</div>
          </div>
          <div className="row my-3">
            <div className="col-6">Insulin:</div>
            <div className="col-6">{insulin}</div>
          </div>
          <div className="row my-3">
            <div className="col-6">BMI:</div>
            <div className="col-6">{bmi}</div>
          </div>
          <div className="row my-3">
            <div className="col-6">Diabetes Pedigree Function:</div>
            <div className="col-6">{diabetesPedigreeFunction}</div>
          </div>
          <div className="row my-3">
            <div className="col-6">Age:</div>
            <div className="col-6">{age}</div>
          </div>
        </div>
        <div className="col-md-6">
          <h3 className={`col-12 ${predictionResult === 'Not Diabetic' ? 'text-success' : 'text-danger'}`}>
            Prediction: {predictionResult}
          </h3>

          <h3>Suggestions</h3>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Prop Types
Results.propTypes = {
  location: PropTypes.object,
};

export default Results;
