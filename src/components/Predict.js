import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Predict = () => {
  const [state, setState] = useState({
    pregnancies: 3,
    glucose: 100,
    bloodPressure: 70,
    skinThickness: 20,
    insulin: 15,
    bmi: 25,
    diabetesPedigreeFunction: 0.47,
    age: 25,
    predictionResult: null,
    error: null,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: Number(value) }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const {
      pregnancies,
      glucose,
      bloodPressure,
      skinThickness,
      insulin,
      bmi,
      diabetesPedigreeFunction,
      age,
    } = state;

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pregnancies,
          glucose,
          bloodPressure,
          skinThickness,
          insulin,
          bmi,
          diabetesPedigreeFunction,
          age,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setState({ ...state, predictionResult: data.result, error: null });
      navigate('/results', { state: { ...state, predictionResult: data.result } });
    } catch (error) {
      console.error('There was an error!', error);
      setState({ ...state, error: error.toString() });
    }
  };

  const {
    pregnancies,
    glucose,
    bloodPressure,
    skinThickness,
    insulin,
    bmi,
    diabetesPedigreeFunction,
    age,
    error,
  } = state;

  return (
    <div>
      <Container>
        <h2>Diabetes Predictor</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group as={Row} className="my-3" controlId="age">
            <Form.Label column sm="2">
              Age
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="range"
                name="age"
                min="0"
                max="100"
                value={age}
                onChange={handleChange}
              />
              <Form.Text className="text-info">Age: {age}</Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-3" controlId="bmi">
            <Form.Label column sm="2">
              BMI
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="range"
                name="bmi"
                min="10"
                max="50"
                value={bmi}
                onChange={handleChange}
              />
              <Form.Text className="text-info">BMI: {bmi}</Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-3" controlId="glucose">
            <Form.Label column sm="2">
              Glucose
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="range"
                name="glucose"
                min="50"
                max="200"
                value={glucose}
                onChange={handleChange}
              />
              <Form.Text className="text-info">Glucose: {glucose}</Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-3" controlId="insulin">
            <Form.Label column sm="2">
              Insulin
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="range"
                name="insulin"
                min="0"
                max="300"
                value={insulin}
                onChange={handleChange}
              />
              <Form.Text className="text-info">Insulin: {insulin}</Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-3" controlId="bloodPressure">
            <Form.Label column sm="2">
              Blood Pressure
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="range"
                name="bloodPressure"
                min="50"
                max="180"
                value={bloodPressure}
                onChange={handleChange}
              />
              <Form.Text className="text-info">
                Blood Pressure: {bloodPressure}
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-3" controlId="pregnancies">
            <Form.Label column sm="2">
              Pregnancies
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="range"
                name="pregnancies"
                min="0"
                max="17"
                value={pregnancies}
                onChange={handleChange}
              />
              <Form.Text className="text-info">
                Pregnancies: {pregnancies}
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-3" controlId="skinThickness">
            <Form.Label column sm="2">
              Skin Thickness
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="range"
                name="skinThickness"
                min="0"
                max="100"
                value={skinThickness}
                onChange={handleChange}
              />
              <Form.Text className="text-info">
                Skin Thickness: {skinThickness}
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="my-3"
            controlId="diabetesPedigreeFunction"
          >
            <Form.Label column sm="2">
              Diabetes Pedigree Function
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="range"
                name="diabetesPedigreeFunction"
                min="0.0"
                max="2.4"
                step="0.01"
                value={diabetesPedigreeFunction}
                onChange={handleChange}
              />
              <Form.Text className="text-info">
                Diabetes Pedigree Function: {diabetesPedigreeFunction}
              </Form.Text>
            </Col>
          </Form.Group>

          <div className="text-center mb-5">
            <button type="submit" className="btn btn-dark btn-lg">
              Predict
            </button>
          </div>

        </Form>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </Container>
    </div>
  );
};

Predict.propTypes = {
  pregnancies: PropTypes.number,
  glucose: PropTypes.number,
  bloodPressure: PropTypes.number,
  skinThickness: PropTypes.number,
  insulin: PropTypes.number,
  bmi: PropTypes.number,
  diabetesPedigreeFunction: PropTypes.number,
  age: PropTypes.number,
};

export default Predict;
