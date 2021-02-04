import React from 'react';
import '../App.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <input name='navSearch' type='number' className='search-input' onChange={this.props.updatePokes} />
            </nav>
        )
    }
}

export default NavBar;