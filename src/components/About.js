import React, { Component } from 'react'

import fevec1 from '../Images/fevec1.png'
import fevec2 from '../Images/fevec2.png'
import fevec3 from '../Images/fevec3.png'

export default class About extends Component {
  render() {
    return (
        <div className="container my-2">
          
        <section id="about" className="about container my-3">
          <h1>About Us</h1>
          <p>Our mission is to help you understand your risk of diabetes and provide actionable insights to improve your health.</p>
          <p>Our diabetes predictor website is widely utilized by individuals and organizations alike to assess diabetes risk and provide personalized recommendations. While not an organization itself, this platform leverages advanced algorithms and comprehensive health data to deliver accurate risk evaluations and actionable insights to help manage and mitigate the risk of diabetes.</p>
        </section>

        <section id="benefits" className="benefits container my-5">
          <h2>Benefits of Early Detection</h2>
          <ul className='my-3'>
            <li>
              <h4>Improved Health Outcomes</h4>
              <p>Early detection allows for timely intervention, which can significantly improve health outcomes and prevent complications associated with diabetes.</p>
            </li>
            <li>
              <h4>Cost Savings</h4>
              <p>Managing diabetes early can reduce healthcare costs by preventing expensive treatments and hospitalizations in the future.</p>
            </li>
            <li>
              <h4>Personalized Care</h4>
              <p>Receive tailored recommendations and lifestyle changes to help manage and reduce your risk of developing diabetes.</p>
            </li>
          </ul>
        </section>

        <section id="features" className="features container my-5">
          <h2>Features</h2>
          <div className="feature-list row container">

            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="card text-center" style={{width:"18rem"}}>
                <img src={fevec1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Comprehensive Risk Assessment</h5>
                  <p className="card-text">Analyze various health factors, lifestyle, and biometric data, to determine your risk of diabetes.</p>
                </div>
              </div>
            </div>

              <div className="col-sm-4 mb-3 mb-sm-0">
                <div className="card text-center" style={{width:"18rem"}}>
                  <img src={fevec2} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Personalized Recommendations</h5>
                    <p className="card-text">Receive customized advice on diet, exercise, and other lifestyle changes to help reduce your risk of diabetes.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-3 mb-sm-0">
                <div className="card text-center" style={{width:"18rem"}}>
                  <img src={fevec3} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Secure and Confidential</h5>
                    <p className="card-text">Your data is protected with the highest standards of privacy and security, ensuring your information remains confidential.</p>
                  </div>
                </div>
              </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works my-5 container">
          <h2>How It Works</h2>
          <ol className='my-3'>
            <li>Enter your health information, including age, weight, and other biometric details as required.</li>
            <li>Our advanced algorithm analyzes your data to assess your risk of developing diabetes.</li>
            <li>Receive an instant risk assessment along with personalized recommendations to help you take control of your health.</li>
          </ol>
        </section>

        <section id="faq" className="faq my-5 container">
          <h2>Frequently Asked Questions</h2>
          <div className="container my-3">
            <div className="faq-item">
              <h4>How accurate is the diabetes predictor?</h4>
              <p>Our tool uses advanced algorithms and extensive health data to provide highly accurate risk assessments. However, it is always recommended to consult with a healthcare professional for a comprehensive evaluation.</p>
            </div>
            <div className="faq-item">
              <h4>Is my data safe?</h4>
              <p>We prioritize your privacy and use state-of-the-art security measures to protect your information. Your data is stored securely and is never shared without your consent.</p>
            </div>
            <div className="faq-item">
              <h4>What should I do if my risk is high?</h4>
              <p>If your risk assessment indicates a high risk of diabetes, we recommend consulting with a healthcare provider to discuss further testing and possible lifestyle changes.</p>
            </div>
          </div>
        </section>

        {/* <section id="contact" className="contact my-5 container">
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, please reach out to us. We're here to help you take control of your health.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-dark mt-2">Submit</button>
          </form>
        </section> */}
        
      </div>
    )
  }
}
