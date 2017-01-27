import { combineReducers } from 'redux';

// Reducers
import pokemonReducer from './pokemons';
import visibilityFilterReducer from './visibilityFilter';

// Combine Reducers
var reducers = combineReducers({
    pokemonsState: pokemonReducer,
    visibilityFilterState: visibilityFilterReducer
});

export default reducers;