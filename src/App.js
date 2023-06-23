import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';

class App extends Component {
    render() {
        return(
            <div className='text-center'>
                <h1 className='text-center'>CV Application</h1>
                <GeneralInfo />
            </div>
        )
    }
}

export default App;