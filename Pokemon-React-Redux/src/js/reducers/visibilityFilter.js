import * as types from '../actions/actionTypes'

const initialState = {
    filter: ''
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { filter: action.filter })
    default:
      return state
  }
}

export default visibilityFilter