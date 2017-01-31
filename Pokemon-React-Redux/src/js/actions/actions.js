import * as types from '../actions/actionTypes';


/* FETCH POKEMONS */
export function fetchPokemonsSuccess(pokemons) {
    return {
        type: types.FETCH_POKEMONS_SUCCESS,
        pokemons
    }
}

export function fetchPokemonsRequest(payload) {
    return {
        type: types.FETCH_POKEMONS_REQUEST,
        payload
    }
}

export function fetchPokemonsFailure(payload) {
    return {
        type: types.FETCH_POKEMONS_FAILURE,
        payload
    }
}

/* FETCH POKEMON */
export function fetchPokemonSuccess(pokemon) {
    return {
        type: types.FETCH_POKEMON_SUCCESS,
        pokemon
    }
}

export function fetchPokemonRequest(payload) {
    return {
        type: types.FETCH_POKEMON_REQUEST,
        payload
    }
}

export function fetchPokemonFailure(payload) {
    return {
        type: types.FETCH_POKEMON_FAILURE,
        payload
    }
}

export function getPokemonSuccess(pokemon) {
    return {
        type: types.GET_POKEMON_SUCCESS,
        pokemon
    }
}

export function setVisibilityFilter(filter) {
    //console.log(filter)
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    }
}
