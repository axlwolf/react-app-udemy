import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state ={
      mouseX: 0,
      mouseY: 0
    };

    // this.handleMouseMove = this.handleMouseMove.bind(this);
    // this.printConsole = this.printConsole.bind(this);
  }

  handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    this.setState({
      mouseX: clientX,
      mouseY: clientY
    });
  }

  printConsole = (event) => {
    console.log(event.nativeEvent);
    console.log(event);
  }

  render() {
    const {mouseX, mouseY} = this.state;
    return (
      <div className="App">
        <h4>
          Eventos
        </h4>
        <Button onClick={this.printConsole}>Click Here!</Button>
        <div
          onMouseMove={this.handleMouseMove}
          style={{
            border: '1px solid red',
            marginTop: 10,
            padding: 10,
            height: '50vh',
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <p>
            {mouseX}
          </p>
          <p>
            {mouseY}
          </p>
        </div>
      </div>
    );
  }
}

const Button = ({ onClick, children }) => 
  <button 
    onClick={onClick}>
    {children}
  </button>

export default App;
