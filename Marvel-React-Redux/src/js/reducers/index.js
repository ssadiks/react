import { combineReducers } from 'redux';

// Reducers
import marvelReducer from './marvels';

// Combine Reducers
var reducers = combineReducers({
    marvelsState: marvelReducer
});

export default reducers;