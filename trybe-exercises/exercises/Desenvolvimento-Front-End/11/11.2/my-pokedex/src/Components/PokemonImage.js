import React from 'react'


function pokeId (id) {
    if(id < 10){
        return '00' + id;
    }else if(id >= 10 && id < 100){
        return '0' + id;
    }
    return id;
}

class PokemonImage extends React.Component {
    render() {
        const pokemon = this.props;
        const link = `https://raw.githubusercontent.com/vivianeflowt/pokedex/master/assets/thumbnails/${pokeId(pokemon.id)}.png`
        return (
            <img src={link} alt={pokemon.id} />
        )
    }
}

export default PokemonImage;