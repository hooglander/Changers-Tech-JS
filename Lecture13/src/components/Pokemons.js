import React, { Component } from 'react';
import PokemonDetails from './PokemonDetails'
import PropTypes from 'prop-types';

class Pokemons extends Component {
  render() {
        return this.props.pokemons.map((poke) => (
            <PokemonDetails key={poke.id} pokemon = {poke}
            removePokemon={this.props.removePokemon}/>
        ));

    }
}

Pokemons.propTypes = {
    pokemons: PropTypes.array.isRequired
}

export default Pokemons;
