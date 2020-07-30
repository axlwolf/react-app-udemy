import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Wellcome = (props) => {
  return <h1>Bienvenido {props.name} a este curso</h1>
}

class Learn extends Component {
  render() {
    return (
      <p className="App-link">
        Vamos a aprender {this.props.framework}
      </p>
    )
  }
}

class Text extends Component {
  render() {
    const {
           text, 
           number,
           boolean, 
           numbersArray,
           objWithInfo,
           multiply,
           title} = this.props;
    const textoAMostrar = boolean ? 'Cierto' : 'Falso';
    const mappedNumbers = numbersArray.map(multiply);
    return (
      <div>
        {title}
        <p>{text}</p>
        <p>{number}</p>
        <p>{textoAMostrar}</p>
        <p>
          {mappedNumbers.join(', ')}
        </p>
        <p>
          {objWithInfo.key}
        </p>
        <ul>
          
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Wellcome name='Axel'/>
          <Learn framework='ReactJs' />
          <Text 
            numbersArray={
              [1,2,3,4,5]
            }
            objWithInfo = {
              {
                key: 'First value',
                key2: 'otherValue'
              }
            }
            number={2} 
            text='Usando props para pasar esta cadena de texto'
            boolean={true}
            multiply={
              (number) => number * 2
            }
            title={<h1>Que paso con esta propiedad</h1>}
            />
        </header>
      </div>
    );
  }
}

export default App;
