import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Wellcome = (props) => {
  console.log(props);
  return <h1>Bienvenido {props.name} a este curso</h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Wellcome name='Axel'/>
          <p
            className="App-link"
          >
            Vamos a aprender react
          </p>
        </header>
      </div>
    );
  }
}

export default App;
