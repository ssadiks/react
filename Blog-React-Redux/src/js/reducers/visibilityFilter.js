import * as types from '../actions/actionTypes'

const initialState = {
    initialVisibility: 'SHOW_ALL'
};

const visibilityFilterReducer = function(state = initialState, action) {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilterReducer