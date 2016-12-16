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
        type: types.ADD_POST_SUCCESS,
        postId,
        post
    }
}

export function deletePostSuccess(postId) {
    return {
        type: types.DELETE_POST_SUCCESS,
        postId
    }
}