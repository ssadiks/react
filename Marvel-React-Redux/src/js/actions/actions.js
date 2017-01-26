import * as types from '../actions/actionTypes';

export function getMarvelsSuccess(marvels) {
    //console.log(marvels)
    return {
        type: types.GET_MARVELS_SUCCESS,
        marvels
    }
}

export function getMarvelSuccess(marvel) {
    return {
        type: types.GET_MARVEL_SUCCESS,
        marvel
    }
}

