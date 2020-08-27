import React, { Component } from 'react';
import './App.css';
import ComponentWillMount from './components/componentWillMount';
import RenderComponent from './components/renderComponent';
import ComponentDidMount from './components/componentDidMount';
import FetchExample from './components/fetchExample';

class App extends Component {

constructor(props) {
  // console.log('cosntructor');
  super(props);
  // component state init
  this.state = {
    initialMessage: 'Initial message.'
  };

  // this.handleClick = this.handleClick.bind(this);
}

  handleClick = (e) => {
    this.setState({
      initialMessage: 'Second message'
    });
  }

  render() {
    // console.log('render');

    return (
      <div className="App">
        <h3>
          Ciclos de vida de los componentes: Constructor.
        </h3>
        <p>
          {this.state.initialMessage}
        </p>
        <button onClick={this.handleClick}>Update initialMessage</button>
        {/* <ComponentWillMount></ComponentWillMount>
        <RenderComponent></RenderComponent>
        <ComponentDidMount></ComponentDidMount> */}
        <FetchExample />
      </div>
    );
  }
}

export default App;
