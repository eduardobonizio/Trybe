import React from 'react';
import '../App.css';
import Pokedex from './Pokedex'

class NavBar extends React.Component {
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
        return <input type='text' className='search-input' onChange={this.updatePokes} />
    }
}

export default NavBar;