import * as types from '../actions/actionTypes'
import _ from 'lodash';

const initialState = {
    posts: []
};

const postReducer = function(state = initialState, action) {
    
    switch(action.type) {
        
        case types.GET_POSTS_SUCCESS:
            return {...state, ...state.posts = action.posts}
        case types.DELETE_POST_SUCCESS:
            console.log(state)
            //const newPosts = _.filter(state.posts, post => post.id != action.postId);
            //const tutu = _.filter(state.posts, function(post) {
            //    return post.id != action.postId
            //  })
            //console.log(state)
            //console.log(tutu)
            //return {...state, ...state.posts = tutu}
    }
    
    return state;
}

export default postReducer;