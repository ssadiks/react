import * as types from '../actions/actionTypes'
import _ from 'lodash';

const initialState = {
    posts: []
};

const postReducer = function(state = initialState, action) {
    
    switch(action.type) {
        
        case types.GET_POSTS_SUCCESS:
            return Object.assign({}, state, { posts: action.posts })
        case types.ADD_POST_SUCCESS:
            const newPostsAfterAdd = state.posts.concat(action.post)
            return {...state, ...state.posts = newPostsAfterAdd}
        case types.UPDATE_POST_SUCCESS:
            //const newPostsAfterUpdate = state.posts.concat(action.post)
            //return {...state, ...state.posts}
        case types.DELETE_POST_SUCCESS:
            const newPostsAfterDelete = _.filter(state.posts, post => post._id != action.postId);
            return {...state, ...state.posts = newPostsAfterDelete}
    }
    
    return state;
}

export default postReducer;