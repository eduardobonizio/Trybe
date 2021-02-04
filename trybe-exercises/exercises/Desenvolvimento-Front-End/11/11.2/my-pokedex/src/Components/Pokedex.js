import React from 'react'

import Pokemon from './Pokemon'
import PokemonImage from './PokemonImage'
import Pokemons from '../Data/Data'

import './Pokedex.css'

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      showPokeInfo: '',
    }

    this.showInfo = this.showInfo.bind(this);
  }

  showInfo(event) {
    this.setState({ showPokeInfo: 'teste' })
    // if (document.querySelectorAll('.poke-data').length > 0) {
    //   const select = document.getElementsByClassName('poke-data');
    //   select[0].remove();
    // }
    // if (document.querySelectorAll('.poke-data').length < 1) {
    //   divNew.addEventListener('click', () => {
    //     if (document.querySelectorAll('.poke-data').length > 0) {
    //       const select = document.getElementsByClassName('poke-data');
    //       select[0].remove();
    //     }
    //   });
    //   document.querySelector('body').appendChild(divNew);
    // }
  }

  showOrHidePokeInfo() {
    const { showPokeInfo } = this.state
    if (showPokeInfo !== '') {
      return <div className='poke-data' />
    }

  }


  render() {
    return (
      Pokemons
        .filter(e => e.name.includes(this.props.filter))
        .map(poke =>
          <div className='Card' key={poke.id} onClick={this.showInfo}>
            <Pokemon name={poke.name} type={poke.type} id={poke.id} />
            <PokemonImage id={poke.id} />
            {this.showOrHidePokeInfo()}
          </div>
        )
    )
  }
}

export default Pokedex;