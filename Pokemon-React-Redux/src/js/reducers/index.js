import { combineReducers } from 'redux';

// Reducers
import pokemonReducer from './pokemons';

// Combine Reducers
var reducers = combineReducers({
    pokemonsState: pokemonReducer
});

export default reducers;