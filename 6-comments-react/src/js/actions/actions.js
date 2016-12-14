/*
 * action types
 */

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'

export function getPostsSuccess(posts) {
    return {
        type: GET_POSTS_SUCCESS,
        posts
    }
}

export function deletePostSuccess(postId) {
    return {
        type: DELETE_POST_SUCCESS,
        postId
    }
}