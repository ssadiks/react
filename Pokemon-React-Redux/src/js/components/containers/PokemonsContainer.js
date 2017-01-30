import React from "react";
import { connect } from 'react-redux';
import store from '../../store';

import PokemonsList from "../views/PokemonsList";
import PokemonsFiltering from "../views/PokemonsFiltering";
import * as pokemonApi from '../../api/pokemon-api';

import { setVisibilityFilter } from '../../actions/actions'

const PokemonsContainer = React.createClass({  
  /* Get Posts */
  componentDidMount() {
    pokemonApi.getPokemons();
  },
  render() {
    return (
      <div>
        <PokemonsFiltering onChange={setVisibleFilter.bind(this)} refreshApp={pokemonApi.getPokemons}/>
        <PokemonsList pokemons={this.props.pokemons} />
      </div>
    );
  }  
})

const getVisiblePokemons = (pokemons, theFilter) => {

  function pokExists (pok) {
    return (pok.name.indexOf(theFilter.toLowerCase()) != -1)
  }
  if(theFilter !== undefined) {
    let pokTrouves = pokemons.filter(pokExists)
    return pokTrouves;
  } else {
    return pokemons;
  }  
  
}

const refreshApp = function() {
  console.log('refresh')
}

const setVisibleFilter = function(filter) {
  store.dispatch(setVisibilityFilter(filter))  
}

const mapStateToProps = function(store) {
  return {
    pokemons: getVisiblePokemons(store.pokemonsState.pokemons, store.visibilityFilterState.filter),
    filter: store.visibilityFilterState.filter
  };
};

export default connect(mapStateToProps)(PokemonsContainer);