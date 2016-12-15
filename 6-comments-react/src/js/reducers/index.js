import { combineReducers } from 'redux';

// Reducers
import postReducer from './posts';

// Combine Reducers
var reducers = combineReducers({
    postsState: postReducer
});

export default reducers;