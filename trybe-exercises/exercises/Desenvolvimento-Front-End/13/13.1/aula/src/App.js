import React from 'react';
import CounterDisplay from './CounterDisplay';
import './App.css';

// App.js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter(value){
    this.setState({ counter: value })
  }

  render() {
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} updateCounter={this.updateCounter}/>
      </div>
    );
  }
}

export default App;
