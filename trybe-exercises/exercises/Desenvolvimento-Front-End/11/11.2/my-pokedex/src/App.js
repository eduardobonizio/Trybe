import './App.css';
import React from 'react'
import Pokedex from './Components/Pokedex';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputTextValue: ''
    }

    this.updatePokes = this.updatePokes.bind(this);
  }

  updatePokes(event) {
    this.setState({ inputTextValue: event.target.value })
    //return <Pokedex filter={this.state.inputTextValue} />
  }

  render() {
    const { inputTextValue } = this.state;
    return (
      <div className="App">
        <nav className='nav'>
          <input type='text' className='search-input' onChange={this.updatePokes} />
        </nav>
        <main className='main'>
          <Pokedex filter={inputTextValue} />
        </main>
      </div>
    );
  }
}

export default App;
