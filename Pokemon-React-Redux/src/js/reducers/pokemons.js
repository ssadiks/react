import * as types from '../actions/actionTypes'
import _ from 'lodash';

const initialState = {
    pokemons: [],
    pokemon: {
        id: null,
        name: null,
        description: null,
        thumbnail: {},
        comics: {
            items: []    
        },
        series: {
            items: []
        }
    }
};

const pokemonReducer = function(state = initialState, action) {
    
    switch(action.type) {        
        case types.GET_POKEMONS_SUCCESS:
            return Object.assign({}, state, { pokemons: action.pokemons })
        case types.GET_POKEMON_SUCCESS:
            return Object.assign({}, state, { pokemon: action.pokemon })
    }
    
    return state;
}

export default pokemonReducer;