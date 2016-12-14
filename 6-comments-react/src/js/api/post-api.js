import axios from 'axios';
import store from '../store';
import { getPostsSuccess, deletePostSuccess } from '../actions/actions';
/**
 * Get Posts
 */

export function getPosts() {
  return axios.get('http://localhost:3030/api/posts')
    .then(response => {
      store.dispatch(getPostsSuccess(response.data));
      return response;  
    });
}

/**
 * Get Post
 */

export function getPost(postId) {
  return axios.get('http://localhost:3030/api/posts/' + postId)
    .then(response => response.data);
}

/**
 * Add a Post
 */

export function addPost(post) {
    return axios.post('http://localhost:3030/api/posts/', post)
      .then(response => {
        store.dispatch(getPostsSuccess(response.data.id));
      })
      .catch(function (error) {
          console.log(error);
        });

}

/**
 * Delete a Post
 */

export function deletePost(postId) {
  return axios.delete('http://localhost:3030/api/posts/' + postId);
}

/**
 * Update a Post
 */

export function updatePost(postId, post) {
    return axios.put('http://localhost:3030/api/posts/' + postId, post)
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
          console.log(error);
        });
}

/**
 * Add a comment
 */

export function addComment(postId, comment) {
    return axios.post('http://localhost:3030/api/posts/' + postId + '/comments', comment)
      .then(response => response.data)
      .catch(function (error) {
        console.log(error);
      });
}

/**
 * Delete a comment
 */

export function deleteComment(postId, commentId) {
  return axios.delete('http://localhost:3030/api/posts/' + postId + '/comments/' + commentId);
}

/**
 * Update a comment
 */

export function updateComment(postId, commentId, comment) {
    return axios.put('http://localhost:3030/api/posts/' + postId + '/comments/' + commentId, comment)
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
          console.log(error);
        });
}

