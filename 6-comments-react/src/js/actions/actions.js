import * as types from '../actions/actionTypes';

export function getPostsSuccess(posts) {
    return {
        type: types.GET_POSTS_SUCCESS,
        posts
    }
}

export function deletePostSuccess(postId) {
    return {
        type: types.DELETE_POST_SUCCESS,
        postId
    }
}