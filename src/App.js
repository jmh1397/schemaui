import React, { Component } from 'react';

import Menu from './components/Menu';
import NewEntity from './components/NewEntity';

class App extends Component {
  render() {
    return (
        <div id="MainApp">
          <Menu />
          <NewEntity />
        </div>
    );
  }
}

export default App;
