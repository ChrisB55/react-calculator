import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      answer: state.answer + 1
    }));
  }

  render() {
    return (
      <div id="body" className="container">
        <div className="row">
          <div id="display"> {this.state.answer} </div>
        </div>
        <div className="row">
          <button id="clear" className="btn-warning">
            AC
          </button>
          <button id="divide" className="btn-danger">
            {' '}
            /
          </button>
        </div>
        <div className="row">
          <button id="7" className="btn-primary">
            7
          </button>
          <button id="8" className="btn-primary">
            8
          </button>
          <button id="9" className="btn-primary">
            9
          </button>
          <button id="multiply" className="btn-danger">
            X
          </button>
        </div>

        <div className="row">
          <button id="4" className="btn-primary">
            4
          </button>
          <button id="5" className="btn-primary">
            5
          </button>
          <button id="6" className="btn-primary">
            6
          </button>
          <button id="subtract" className="btn-danger">
            -
          </button>
        </div>

        <div className="row">
          <button id="1" className="btn-primary" onClick={this.handleClick}>
            1
          </button>
          <button id="2" className="btn-primary">
            2
          </button>
          <button id="3" className="btn-primary">
            3
          </button>
          <button id="add" className="btn-danger">
            +
          </button>
        </div>
        <div className="row">
          <button id="zero" className="btn-primary">
            0
          </button>
          <button id="decimal" className="btn-primary">
            .
          </button>
          <button id="equal" className="btn-info">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
