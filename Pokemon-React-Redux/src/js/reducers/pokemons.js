import * as types from '../actions/actionTypes'
import _ from 'lodash';

const initialState = {
    pokemons: {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    pokemon: {
        isFetching: false,
        didInvalidate: false,
        infos: {
            abilities: [{
            slot: '',
            is_hidden: '',
            ability: {
                url: '',
                name: ''
            }
            }],
            forms: [{
                name: '',
                url: ''
            }],
            sprites: []
        }        
    }
};

const pokemonReducer = function(state = initialState, action) {
    
    switch(action.type) {        
        case types.FETCH_POKEMONS_REQUEST:
            return Object.assign({}, state, { pokemons: { isFetching: true, didInvalidate: false, items: [] } })
            //return Object.assign({}, state.pokemons, { isFetching: true, didInvalidate: false } )
        case types.FETCH_POKEMONS_SUCCESS:
            //return Object.assign({}, state.pokemons, { isFetching: false, didInvalidate: false, items: action.pokemons } )
            return Object.assign({}, state, { pokemons: { isFetching: false, didInvalidate: false, items: action.pokemons } })
        case types.FETCH_POKEMONS_FAILURE:
            return Object.assign({}, state, { pokemons: { isFetching: false, didInvalidate: true, items: [] } })
        case types.FETCH_POKEMON_SUCCESS:
            return Object.assign({}, state, { pokemon: { isFetching: false, didInvalidate: false, infos: action.pokemon } })
    }
    
    return state;
}

export default pokemonReducer;