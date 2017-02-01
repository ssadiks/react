import React from "react";
import { connect } from 'react-redux';
import store from '../../store';
import { Link } from 'react-router';

import * as pokemonApi from '../../api/pokemon-api';


import PokemonInfos from "../views/PokemonInfos";

const PokemonContainer = React.createClass({
  
  /* Get Post By Id Url */
  componentDidMount() {
    let pokemonId = this.props.params.pokemonsId    
    pokemonApi.getPokemon(pokemonId)
  },
  render() {
    return (
      <div>
        <PokemonInfos pokemon={this.props.pokemon} pokemonStates={this.props.pokemonStates}/>
        <Link className="button" to={'pokemons'}>Back</Link>
      </div>
    );
  }
})


const mapStateToProps = function(store) {
  console.log(store.pokemonsState.pokemon)
  return {
    pokemonStates: store.pokemonsState.pokemon,
    pokemon: store.pokemonsState.pokemon.infos
  }
}

export default connect(mapStateToProps)(PokemonContainer);