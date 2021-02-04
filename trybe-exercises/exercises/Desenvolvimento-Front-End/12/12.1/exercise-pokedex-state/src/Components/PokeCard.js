import React from 'react'

import Pokemon from './Pokemon'
import PokemonImage from './PokemonImage'

import './Pokedex.css'

class PokeCard extends React.Component {

  render() {
    const {currentPoke, pokeList } = this.props;
    return (
      <div className='card-box'>
      {pokeList
      .map(poke =>
        <div className='card' key={poke.id} >
          <Pokemon name={poke.name} type={poke.type} id={poke.id} />
          <PokemonImage id={poke.id} />
        </div>
      )[currentPoke]}
      </div>
    )
  }
}

export default PokeCard;