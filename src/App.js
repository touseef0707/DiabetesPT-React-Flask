import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Predict from './components/Predict';
import Navbar from './components/Navbar';
import { Component } from 'react';
import Results from './components/Results';

// Class Based App Component
export default class App extends Component {

  render() {
    return (
      <Router>
        <Navbar logo={logo}/>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/results" element={<Results/>}/>
            <Route exact path="/predict" element={<Predict/>}/>
          </Routes>
        </div>
      </Router>
    )
  }
}