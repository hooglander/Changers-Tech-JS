import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

class PokemonDetails extends Component {
    dynamicStyle = () => {
        return {
            width: '400px',
            background: this.props.pokemon.addedLast? 'green': 'white'
        }
    }

    // removePokemon = (e) => {
    //     console.log(this.props)
    // }

    render() {
        const {id, name} = this.props.pokemon;
        return (
                <div style={this.dynamicStyle()}>
                    <h1>{name}
                        <button style={buttonStyle} onClick={this.props.removePokemon.bind(this, id)}>x</button>
                    </h1>
                </div>
        )
    }
}

PokemonDetails.propTypes = {
    pokemon: PropTypes.object.isRequired
}

const buttonStyle = {
    padding: '1px 5px',
    float: 'right'
}
// const detailsStyle = {
//     backgroundColor: 'blue'
// }


export default PokemonDetails;
