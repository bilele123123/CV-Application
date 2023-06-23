import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className='container'>

        <div className='header'>
          <h1 className='header-title'>CV Application</h1>
        </div>

        <div className='main-content'>
          <GeneralInfo />
          <div class="divider"></div>
        </div>


      </div>
    )
  }
}

export default App;