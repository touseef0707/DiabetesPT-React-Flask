import React, { Component } from 'react'

import styles from '../styles/home.css'
import homecarousel1 from '../Images/homecarousel1.png'
import homecarousel2 from '../Images/homecarousel2.png'
import homecarousel3 from '../Images/homecarousel3.png'
import About from './About'

export default class Home extends Component {
  static propTypes = {
  }

  constructor() {
    super();
    this.style = styles;
  }

  render() {
    
    return (
      <div>
        <div className="container carousel-bg">
          <h1 className='text-center'>Predict Your Diabetes Today!</h1>
          <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={homecarousel1} className="img-fluid d-block w-75 mx-auto darken-img"  alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Welcome to Our Diabetes Prediction Website</h3>
                  <h6>Understand your risk of diabetes with our advanced predictor tool.</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={homecarousel2} className="img-fluid d-block w-75 mx-auto darken-img"  alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Benefits of Early Detection</h3>
                  <h6>Discover the advantages of identifying diabetes early and take control of your health.</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={homecarousel3} className="img-fluid d-block w-75 mx-auto darken-img"  alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h3>How Our Predictor Works</h3>
                  <h6>Learn about the science and technology behind our diabetes prediction model.</h6>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <About/>
      </div>
    )
  }
}