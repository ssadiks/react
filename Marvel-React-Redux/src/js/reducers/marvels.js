import * as types from '../actions/actionTypes'
import _ from 'lodash';

const initialState = {
    marvels: [],
    marvel: {
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

const marvelReducer = function(state = initialState, action) {
    
    switch(action.type) {        
        case types.GET_MARVELS_SUCCESS:
            return Object.assign({}, state, { marvels: action.marvels })
        case types.GET_MARVEL_SUCCESS:
            return Object.assign({}, state, { marvel: action.marvel })
    }
    
    return state;
}

export default marvelReducer;