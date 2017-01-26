import React from "react";
import { connect } from 'react-redux';
import store from '../../store';

import PokemonsList from "../views/PokemonsList";
import * as pokemonApi from '../../api/pokemon-api';

const PokemonsContainer = React.createClass({  
  /* Get Posts */
  componentDidMount() {
    pokemonApi.getPokemons();
  },
  render() {
    return (
      <div>
        <PokemonsList pokemons={this.props.pokemons} />
      </div>
    );
  }  
})

const mapStateToProps = function(store) {
  return {
    pokemons: store.pokemonsState.pokemons
  };
};

export default connect(mapStateToProps)(PokemonsContainer);