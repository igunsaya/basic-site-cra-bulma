import React, { Component } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';
import Panel from './components/Panel';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Panel/>
        <Footer />
      </div>
    );
  }
}

export default App;
