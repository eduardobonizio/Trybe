import React from 'react';
import Types from '../Data/types.js'

class PokeTypes extends React.Component {
  render() {
    return (
      <div className='poke-types-buttons-box'>
        {Types.sort((a, b) => {
          return a.name.localeCompare(b.name);
        }).map(e =>
          <button key={e.name} className={`poke-types-buttons ${e.name.toLowerCase()}`} onClick={this.props.selectedType}>{e.name}</button>
        )}
      </div>
    )
  }
}

export default PokeTypes;