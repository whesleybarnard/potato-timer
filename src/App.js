import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>{test2('woohoo')}</header>
        <div className="grid">
          <div className="grid-item"></div>
          <div className="grid-item inner-grid">
            <div className="inner-grid-item"></div>
            <div className="inner-grid-item"></div>
            <div className="inner-grid-item"></div>
          </div>
          <div className="grid-item"></div>
        </div>
        <div className="grid2">
          <div className="grid2-item"></div>
          <div className="grid2-item"></div>
          <div className="grid2-item"></div>
          <div className="grid2-item"></div>
        </div>
      </div>
    );
  }
}

const test2 = (tt) => {
  return tt;
}

export default App;
