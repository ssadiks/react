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
    store.dispatch(setVisibilityFilter(''));
    console.log('pokemoSSSDidMount');
  },
  render() {
    return (
      <div>
        <PokemonsFiltering onChange={setVisibleFilter.bind(this)} refreshApp={refreshApp}/>
        <PokemonsList pokemons={this.props.pokemons} pokemonsStates={this.props.pokemonsStates} />
      </div>
    );
  }  
})

const getVisiblePokemons = (pokemons, theFilter) => {
  
  function pokExists (pok) {
    return (pok.name.indexOf(theFilter.toLowerCase()) != -1)
  }
  if(theFilter !== undefined && pokemons !== undefined) {
    let pokTrouves = pokemons.filter(pokExists)
    return pokTrouves;
  } else {
    return pokemons;
  }  
  
}

const refreshApp = function() {
  store.dispatch(setVisibilityFilter(''));
  console.log('refresh')
}

const setVisibleFilter = function(filter) {
  store.dispatch(setVisibilityFilter(filter))  
}

const mapStateToProps = function(store) {
  //console.log(store.pokemonsState.pokemons)
  return {
    pokemonsStates: store.pokemonsState.pokemons,
    pokemons: getVisiblePokemons(store.pokemonsState.pokemons.items, store.visibilityFilterState.filter),
    filter: store.visibilityFilterState.filter
  };
};

export default connect(mapStateToProps)(PokemonsContainer);