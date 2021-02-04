import React from 'react'

class PokemonImage extends React.Component {
  pokeId(id) {
    if (id < 10) {
      return '00' + id;
    }
    if (id >= 10 && id < 100) {
      return '0' + id;
    }
    return id;
  }

  render() {
    const pokemon = this.props;
    const link = `https://raw.githubusercontent.com/vivianeflowt/pokedex/master/assets/thumbnails/${this.pokeId(pokemon.id)}.png`
    return (
      <img src={link} alt={pokemon.id} />
    )
  }
}

export default PokemonImage;
