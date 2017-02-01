import axios from 'axios';
import crypto from 'crypto';

import store from '../store';
import { fetchPokemonsRequest, fetchPokemonsSuccess, fetchPokemonsFailure, fetchPokemonRequest, fetchPokemonSuccess, fetchPokemonFailure } from '../actions/actions';


/**
 * Get Pokemons
 */

export function getPokemons() {
  const payload = true;
  store.dispatch(fetchPokemonsRequest(payload));
  return axios.get('http://pokeapi.co/api/v2/pokemon')
    .then(response => {
      store.dispatch(fetchPokemonsSuccess(response.data.results));
      return response;  
    }).catch(function(e) {
      store.dispatch(fetchPokemonsFailure(payload));
      console.log(e);
    })
}

/**
 * Get Post
 */

export function getPokemon(pokemonId) {
  const payload = true;
  store.dispatch(fetchPokemonRequest(payload));
  return axios.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId)
    .then(response => {
      store.dispatch(fetchPokemonSuccess(response.data));
    }).catch(function(e) {
      store.dispatch(fetchPokemonFailure(payload));
      console.log(e);
    })
}