import React from 'react'

function pokeType(type) {
    const types = type.map(e => <div key={e} className={`${e.toLowerCase()} poke-type-box`}>{e}</div>)
    return (<div className='poke-type'>{types}</div>)
}

class Pokemon extends React.Component {
    render() {
        const pokemon = this.props;
        return (
            <div className='pokeInfo'>
                <div>ID: {pokemon.id}<br />
                Name: {pokemon.name}<br />
                    {pokeType(pokemon.type)}</div>
            </div>
        )
    }
}

export default Pokemon;