import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import math from 'mathjs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  handleClick(e) {
    this.setState({
      answer: [...this.state.answer, e.target.value]
    });
  }

  handleEvaluate() {
    this.setState({
      answer: math.eval(this.state.answer)
    })
  }

  handleClickClear() {
    this.setState(state => ({
      answer: this.state.answer = []
    }));
  }
  render() {
    return (
      <div id="body" className="container">
        <div className="row">
          <div id="display" placeholder="0"> {this.state.answer} </div>
        </div>
        <div className="row">
          <button
            id="clear"
            value="clear"
            className="btn-warning"
            onClick={this.handleClickClear}>
            AC
          </button>
          <button id="divide" value="/" className="btn-danger"> /</button>
        </div>
        <div className="row">
          <button className="btn-primary" id="7" value="7"
            onClick={this.handleClick}>7 </button>
          <button className="btn-primary" id="8" value="8"
            onClick={this.handleClick} >8</button>
          <button className="btn-primary" id="9" value="9"
            onClick={this.handleClick}>9 </button>

          <button className="btn-danger" id="multiply" value="*"
            onClick={this.handleClick}> X
          </button>
        </div>

        <div className="row">
          <button className="btn-primary" id="4" value="4"
            onClick={this.handleClick}>4 </button>
          <button className="btn-primary" id="5" value="5"
            onClick={this.handleClick} >5</button>
          <button className="btn-primary" type="checkbox" id="6" value="9"
            onClick={this.handleClick}>6 </button>
          <button className="btn-danger" id="multiply" value="-"
            onClick={this.handleClick}> - </button>
        </div>
        <div className="row">
          <button className="btn-primary" id="1" value="1"
            onClick={this.handleClick}>1 </button>
          <button className="btn-primary" id="2" value="2"
            onClick={this.handleClick} >2</button>
          <button className="btn-primary" type="checkbox" id="3" value="3"
            onClick={this.handleClick}>3 </button>
          <button className="btn-danger" id="multiply" value="+"
            onClick={this.handleClick}> + </button>
        </div>
        <div className="row">
          <button className="btn-primary" id="zero" value="0"
            onClick={this.handleClick}> 0 </button>
          <button className="btn-primary" id="decimal" value="."
            onClick={this.handleClick}> . </button>
          <button className="btn-info" id="equal" value="="
            onClick={this.handleEvaluate}> = </button>
        </div>
      </div>
    );
  }
}
export default App;
