import * as types from '../actions/actionTypes'
import _ from 'lodash';

const initialState = {
    posts: [],
    post: {
        _id: null,
        title: null,
        text: null,
        likes: null,
        comments: []
    }
};

const postReducer = function(state = initialState, action) {
    
    switch(action.type) {
        
        case types.GET_POSTS_SUCCESS:
            return Object.assign({}, state, { posts: action.posts })
        case types.GET_POST_SUCCESS:
            return Object.assign({}, state, { post: action.post })
        case types.ADD_POST_SUCCESS:
            const newPostsAfterAdd = state.posts.concat(action.post)
            return {...state, ...state.posts = newPostsAfterAdd}
        case types.ADD_COMMENT_SUCCESS:
            console.log('add')
            //const newPostsAfterAdd = state.posts.concat(action.post)
            //return {...state, ...state.posts = newPostsAfterAdd}
        case types.UPDATE_POST_SUCCESS:            
            const newPostAfterUpdate = state.post = action.post
            return {...state, ...state.posts = newPostAfterUpdate}
        case types.DELETE_POST_SUCCESS:
            const newPostsAfterDelete = _.filter(state.posts, post => post._id != action.postId);
            return {...state, ...state.posts = newPostsAfterDelete}
    }
    
    return state;
}

export default postReducer;