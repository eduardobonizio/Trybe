import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      buttonOne: 0,
      buttonTwo: 0,
      buttonThree: 0,
    }

    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState((valorAnterior, _props) => ({
      [e.target.name]: valorAnterior[e.target.name] + 1,
    }));
    this.changeBg(e)
  }

  changeBg (e) {
    if((this.state[e.target.name] % 2) === 0){
      e.target.style.backgroundColor = 'green';
      console.log('Green');
    }else {
      e.target.style.backgroundColor = '';
      console.log('Default');
    }
  }

  render() {
    return (
      <div>
        <button name='buttonOne' onClick={this.handler}>Teste</button>
        <button name='buttonTwo' onClick={this.handler}>Teste2</button>
        <button name='buttonThree' onClick={this.handler}>Teste3</button>
      </div>
    )
  };
}

export default App;
