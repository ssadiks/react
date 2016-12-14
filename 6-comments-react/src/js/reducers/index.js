import { combineReducers } from 'redux';

// Reducers
import postsReducer from './posts';

// Combine Reducers
var reducers = combineReducers({
    postsState: postsReducer
});

export default reducers;