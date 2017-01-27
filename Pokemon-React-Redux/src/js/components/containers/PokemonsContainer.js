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
        <PokemonsFiltering onChange={setVisibleFilter.bind(this)}/>
        <PokemonsList pokemons={this.props.pokemons} />
      </div>
    );
  }  
})

const getVisiblePokemons = (pokemons, theFilter) => {
  //theFilter.toLowerCase();
  console.log(theFilter)
  return pokemons;
}

const setVisibleFilter = function(filter) {
  //console.log(filter)
  store.dispatch(setVisibilityFilter(filter))
  
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const mapStateToProps = function(store) {
  console.log(store.visibilityFilterState.filter)
  return {
    pokemons: getVisiblePokemons(store.pokemonsState.pokemons, store.visibilityFilterState.filter),
    filter: store.visibilityFilterState.filter
  };
};

export default connect(mapStateToProps)(PokemonsContainer);