import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     counter: 1
  //   }
  // }
  // haz que ese constructor desaparezca!
  // usa las nuevas Class Fields para inicializar el state
  // como te indica este post: http://aprendiendoreact.com/post/como-inicializar-el-state-de-un-componente-con-class-properties/
  state = {
    counter: 1
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
