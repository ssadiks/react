import React from "react";
import { connect } from 'react-redux';
import store from '../../store';
import { Link } from 'react-router';

import * as pokemonApi from '../../api/pokemon-api';


import PokemonInfos from "../views/PokemonInfos";

const PokemonContainer = React.createClass({
  
  /* Get Post By Id Url */
  componentDidMount() {
    let pokemonId = this.props.params.charactersId    
    pokemonApi.getPokemon(pokemonId)
  },
  render() {
    return (
      <div>
        <PokemonInfos pokemon={this.props.pokemon} />
        <Link className="button" to={'characters'}>Back</Link>
      </div>
    );
  }
})


const mapStateToProps = function(store) {
  return {
    pokemon: store.pokemonsState.pokemon
  }
}

export default connect(mapStateToProps)(PokemonContainer);