import './App.css';
import React from 'react'
import PokeCard from './Components/PokeCard';
import Pokemons from './Data/Data'
import ChangePoke from './Components/ChangePoke';
import PokeTypes from './Components/PokeTypes';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      changePoke: '',
      pokeType: 'Grass',
      currPoke: 0,
      maxPokes: 0,
      pokeList: [],
    }
    this.selectedType = this.selectedType.bind(this);
    this.previousPoke = this.previousPoke.bind(this);
    this.nextPoke = this.nextPoke.bind(this);
  }

  //componentWillMount() {
  componentDidMount(){
    const type = this.state.pokeType;
    this.selectedType(type);
  }

  selectedType(e) {
    const type = (e !== 'Grass') ? e.target.innerText: e;
    const pokeList = Pokemons.filter(e => e.type.includes(type))
    return this.setState({ pokeType: type, currPoke: 0, maxPokes: pokeList.length - 1, pokeList: pokeList })
  }

  nextPoke(e) {
    if (this.state.currPoke > (this.state.maxPokes - 1)) {
      return this.setState({ currPoke: 0 })
    }
    return this.setState({ changePoke: 'next', currPoke: this.state.currPoke + 1 });
  }

  previousPoke(e) {
    if (this.state.currPoke <= 0) {
      return this.setState({ currPoke: this.state.maxPokes })
    }
    return this.setState({ changePoke: 'previous', currPoke: this.state.currPoke - 1 });
  }

  render() {
    return (
      <div className="App">
        <main className='main'>
        <PokeCard currentPoke={this.state.currPoke} pokeList={this.state.pokeList} />
        <PokeTypes selectedType={this.selectedType}/>
        <ChangePoke nextPoke={this.nextPoke} previousPoke={this.previousPoke} />
        </main>
      </div>
    );
  }
}

export default App;
