//import * from '../actions/actions'

const initialState = {
    posts: []
}

const postsReducer = function(state = initialState, action) {
    
    switch(action.type) {
        case 'GET_POSTS_SUCCESS':
            return Object.assign({}, state, {postsReducer: action.posts });
        case 'DELETE_POST_SUCCESS':
            console.log('delete success')
            return state
    }
    
    return state;
}

export default postsReducer;