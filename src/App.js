import React, { Component } from 'react';
import './App.css';

import Canvass from './components/Canvass';

class App extends Component {
  render() {
    return (
            <div id="main">
                <h1>Attempt 1</h1>
                <Canvass />
            </div>
    );
  }
}

export default App;
