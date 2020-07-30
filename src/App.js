import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1
    };
    setInterval(() => {
      this.setState({
       counter: this.state.counter + 1
      });
     }, 1000);
  }

  render() {
    const {counter} = this.state;
    return <span>{counter}</span>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter></Counter>
        </header>
      </div>
    );
  }
}

export default App;
