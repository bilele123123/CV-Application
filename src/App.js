import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import './styles.css';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import CVApplication from './components/CVApplication';

class App extends Component {
  render() {
    return (
      <div className='container'>

        <div className='header'>
          <h1 className='header-title'>CV Application</h1>
        </div>

        <div className='main-content'>
          <CVApplication></CVApplication>
        </div>


      </div>
    )
  }
}

export default App;