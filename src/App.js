import React, { Component } from 'react';
import './App.css';
import ConditionalSection from './components/Conditional';
import cars from './cars.json';

class App extends Component {
  render() {
    const numbers = [1,1,2,3,4,5];
    return (
      <div className="App">
        <h4>
          Trabajando con listas.
        </h4>
        <ul>
          {
            numbers.map((number, index) => <li key={index}>{number}</li>)
          }
        </ul>
        <ol>
        {
            cars.map((car, index) => {
              return <CarItem key={car.id} car={car} />
            })
          }
        </ol>
      </div>
    );
  }
}

const CarItem = ({car}) => {
  return(
      <li>
        <span>
          {car.name} | 
        </span>
        <span>
          {car.company}
        </span>
      </li>
    )
};
 

export default App;
