import React from 'react';

class ChangePoke extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.props.previousPoke}>Previous poke</button>
                <button onClick={this.props.nextPoke}>Next poke</button>
            </div>
        )
    }
}

export default ChangePoke;
