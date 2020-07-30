import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initCounter
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    setInterval(() => {
      this.setState({
       counter: this.state.counter + 1
      });
     }, 1000);
  }

  componentDidMount() {
    this.changeState();
  }

  render() {
    const {counter} = this.state;
    return <NumberCounter number={counter} />
  }
}

Counter.defaultProps = {
  initCounter: 10
}

class NumberCounter extends Component {
  render() {
    return(
      <span>
        {this.props.number}
      </span>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter initCounter={100}></Counter>
        </header>
      </div>
    );
  }
}

export default App;
