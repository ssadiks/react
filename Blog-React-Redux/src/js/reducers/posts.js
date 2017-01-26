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
        case types.DELETE_POST_SUCCESS:
            const newPostsAfterDelete = _.filter(state.posts, post => post._id != action.postId);
            return {...state, ...state.posts = newPostsAfterDelete}
        case types.UPDATE_POST_SUCCESS:            
            return {...state, ...state.post = action.post}
        case types.DELETE_COMMENT_SUCCESS:
            const newCommentsAfterDelete = _.filter(state.post.comments, comment => comment._id != action.commentId);
            return Object.assign({}, state, { post: { comments: newCommentsAfterDelete} })
        case types.LIKE_COMMENT_SUCCESS:
            const uu = state.post.comments.map(comment => {
                if(comment._id == action.commentId) {
                    comment = action.comment
                    //console.log(comment)
                }
            })
            console.log(uu)
            //console.log(state.post.comments)
            let one = Object.assign({}, state, { post: action.post })
            let two = Object.assign({}, state, { post: { comments: state.post.comments} })
            let three = Object.assign({}, state, { post: state.post })
            //console.log(three)
            return Object.assign({}, state, { post: state.post })
    }
    
    return state;
}

export default postReducer;