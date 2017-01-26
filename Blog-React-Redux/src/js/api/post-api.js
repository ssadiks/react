import axios from 'axios';
import store from '../store';
import { addPostSuccess, updatePostSuccess, getPostsSuccess, deletePostSuccess, getPostSuccess, addCommentSuccess, deleteCommentSuccess, likeCommentSuccess } from '../actions/actions';
//import * as types from '../actions/actionTypes';
/**
 * Get Posts
 */

export function getPosts() {
  return axios.get('http://localhost:3030/api/posts')
    .then(response => {
      store.dispatch(getPostsSuccess(response.data));
      //store.dispatch({
      //  type: types.GET_POSTS_SUCCESS,
      //  posts: response.data
      //});
      return response;  
    });
}

/**
 * Get Post
 */

export function getPost(postId) {
  return axios.get('http://localhost:3030/api/posts/' + postId)
    .then(response => {
      store.dispatch(getPostSuccess(response.data));
    })
}

/**
 * Add a Post
 */

export function addPost(post) {
    return axios.post('http://localhost:3030/api/posts/', post)
      .then(response => {
        store.dispatch(addPostSuccess(response.data));
      })
      .catch(function (error) {
          console.log(error);
        });

}

/**
 * Delete a Post
 */

export function deletePost(postId) {
  return axios.delete('http://localhost:3030/api/posts/' + postId)
    .then(response => {
      store.dispatch(deletePostSuccess(postId));
      return response;
    });
}

/**
 * Update a Post
 */

//export function updatePost(postId, post) {
//    return axios.put('http://localhost:3030/api/posts/' + postId, post)
//        .then(function (response) {
//          store.dispatch(updatePostSuccess(postId, post));
//            return response;
//          })
//          .catch(function (error) {
//            console.log(error);
//          });
//}

/**
 * Like a Post
 */

export function likePost(postId, post) {
  //console.log(postId)
  let postUpdated = {}
  postUpdated = {...post, ...post.likes++}
  //console.log(postUpdated)
    return axios.put('http://localhost:3030/api/posts/' + postId, postUpdated)
      .then(function (response) {
        store.dispatch(updatePostSuccess(postId, postUpdated))
        return response;
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
      .then(response => {
        store.dispatch(getPostSuccess(response.data))
          return response;
        })
        .catch(function (error) {
          console.log(error);
        });
}

/**
 * Delete a comment
 */

export function deleteComment(postId, commentId) {
  return axios.delete('http://localhost:3030/api/posts/' + postId + '/comments/' + commentId)
    .then(function (response) {
      store.dispatch(deleteCommentSuccess(postId, commentId))
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 * Update a comment
 */

//export function updateComment(postId, commentId, comment) {
//    return axios.put('http://localhost:3030/api/posts/' + postId + '/comments/' + commentId, comment)
//        .then(function (response) {
//            console.log(response);
//          })
//        .catch(function (error) {
//          console.log(error);
//        });
//}

export function likeComment(postId, commentId, comment) {
    let comUpdated = {}
    comUpdated = {...comment, ...comment.likes++}
    return axios.put('http://localhost:3030/api/posts/' + postId + '/comments/' + commentId, comUpdated)
      .then(function (response) {
          store.dispatch(likeCommentSuccess(postId, commentId, comUpdated))
          return response;
        })
      .catch(function (error) {
        console.log(error);
      });
}


