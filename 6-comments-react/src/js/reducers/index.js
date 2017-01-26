import { combineReducers } from 'redux';

// Reducers
import postReducer from './posts';
//import visibilityFilterReducer from './visibilityFilter';

// Combine Reducers
var reducers = combineReducers({
    postsState: postReducer
    //visibilityFilterState: visibilityFilterReducer
});

export default reducers;