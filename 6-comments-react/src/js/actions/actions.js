import * as types from '../actions/actionTypes';

export function getPostsSuccess(posts) {
    return {
        type: types.GET_POSTS_SUCCESS,
        posts
    }
}

export function addPostSuccess(post) {
    return {
        type: types.ADD_POST_SUCCESS,
        post
    }
}

export function updatePostSuccess(postId, post) {
    return {
        type: types.UPDATE_POST_SUCCESS,
        postId,
        post
    }
}
/*PostContainer*/
export function getPostSuccess(post) {
    return {
        type: types.GET_POST_SUCCESS,
        post
    }
}


export function deletePostSuccess(postId) {
    return {
        type: types.DELETE_POST_SUCCESS,
        postId
    }
}

export function deleteCommentSuccess(postId, commentId) {
    return {
        type: types.DELETE_COMMENT_SUCCESS,
        postId,
        commentId
    }
}


export function likeCommentSuccess(postId, commentId, comment) {
    return {
        type: types.LIKE_COMMENT_SUCCESS,
        postId,
        commentId,
        comment
    }
}