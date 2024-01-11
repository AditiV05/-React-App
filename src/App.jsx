// src/App.jsx
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  // Function to increment the counter
  increaseCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  // Function to decrement the counter
  decreaseCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  // Function to reset the counter
  resetCounter = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="counter-app">
        <h1>Counter App</h1>
        <div className="counter">{this.state.counter}</div>
        <div className="buttons">
          <button onClick={this.increaseCounter}>+</button>
          <button onClick={this.decreaseCounter}>-</button>
          <button onClick={this.resetCounter}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
