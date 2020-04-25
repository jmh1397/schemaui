import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Left from './components/Left';
import Right from './components/Right';
import Center from './components/Center';

class App extends Component {
  render() {
    return (
            <div id="MainApp">
                <Header />
                <Footer />
                <Left />
                <Right />
                <Center />
            </div>
    );
  }
}

export default App;
