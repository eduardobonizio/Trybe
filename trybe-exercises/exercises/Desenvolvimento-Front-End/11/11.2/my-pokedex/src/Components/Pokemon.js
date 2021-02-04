import React from 'react'

function pokeType(type) {
    return type.reduce((acc, curr) =>
        `${acc}/` + curr
    );
}

class Pokemon extends React.Component {
    render() {
        const pokemon = this.props;
        return (
            <div className='pokeInfo'>
                <div>ID: {pokemon.id}</div>
                <div>Name: {pokemon.name}</div>
                <div>{pokeType(pokemon.type)}</div>
            </div>
        )
    }
}

export default Pokemon;