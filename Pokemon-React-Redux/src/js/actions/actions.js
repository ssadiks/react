import * as types from '../actions/actionTypes';

export function getPokemonsSuccess(pokemons) {
    //console.log(marvels)
    return {
        type: types.GET_POKEMONS_SUCCESS,
        pokemons
    }
}

export function getPokemonSuccess(pokemon) {
    return {
        type: types.GET_POKEMON_SUCCESS,
        pokemon
    }
}

