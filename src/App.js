import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      answer: state.answer + 1
    }));
  }

  handleClickClear() {
    this.setState(state => ({
      answer: 0
    }));
  }

  render() {
    return (
      <div id="body" className="container">
        <div className="row">
          <div id="display"> {this.state.answer} </div>
        </div>
        <div className="row">
          <button
            id="clear"
            value="clear"
            className="btn-warning"
            onClick={this.handleClickClear}>
            AC
          </button>
          <button id="divide" value="/" className="btn-danger">
            {' '}
            /
          </button>
        </div>
        <div className="row">
          <button id="7" value="7" className="btn-primary">
            7
          </button>
          <button id="8" value="8" className="btn-primary">
            8
          </button>
          <button id="9" value="9" className="btn-primary">
            9
          </button>
          <button id="multiply" value="*" className="btn-danger">
            X
          </button>
        </div>

        <div className="row">
          <button id="4" value="4" className="btn-primary">
            4
          </button>
          <button id="5" value="5" className="btn-primary">
            5
          </button>
          <button id="6" value="6" className="btn-primary">
            6
          </button>
          <button id="subtract" value="-" className="btn-danger">
            -
          </button>
        </div>

        <div className="row">
          <button
            id="1"
            value="1"
            className="btn-primary"
            onClick={this.handleClick}>
            1
          </button>
          <button id="2" value="2" className="btn-primary">
            2
          </button>
          <button id="3" value="3" className="btn-primary">
            3
          </button>
          <button id="add" value="+" className="btn-danger">
            +
          </button>
        </div>
        <div className="row">
          <button id="zero" value="0" className="btn-primary">
            0
          </button>
          <button id="decimal" value="." className="btn-primary">
            .
          </button>
          <button id="equal" value="=" className="btn-info">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
