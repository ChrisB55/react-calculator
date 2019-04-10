import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="body" className="container">
        <div className="row">
          <div id="display"> </div>
        </div>
        <div className="row">
          <button id="clear">AC</button>
          <button id="divide"> /</button>
        </div>
        <div className="row">
          <button id="7">7</button>
          <button id="8">8</button>
          <button id="9">9</button>
          <button id="multiply">X</button>
        </div>

        <div className="row">
          <button id="4">4</button>
          <button id="5">5</button>
          <button id="6">6</button>
          <button id="subtract">-</button>
        </div>

        <div className="row">
          <button id="1">1</button>
          <button id="2">2</button>
          <button id="3">3</button>
          <button id="add">+</button>
        </div>
        <div className="row">
          <button id="zero">0</button>
          <button id="decimal">.</button>
          <button id="equal">=</button>
        </div>
      </div>
    );
  }
}

export default App;
