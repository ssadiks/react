import axios from 'axios';
import crypto from 'crypto';

import store from '../store';
import { getPokemonsSuccess, getPokemonSuccess } from '../actions/actions';


/**
 * Get Pokemons
 */

export function getPokemons() {
  return axios.get('http://pokeapi.co/api/v2/pokemon')
    .then(response => {
      store.dispatch(getPokemonsSuccess(response.data.results));
      return response;  
    });
}

/**
 * Get Post
 */

export function getPokemon(pokemonId) {
  return axios.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId)
    .then(response => {
      store.dispatch(getPokemonSuccess(response.data));
    })
}