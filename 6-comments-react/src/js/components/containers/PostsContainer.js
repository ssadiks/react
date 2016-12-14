import React from "react";

import PostsList from "../views/PostsList";
import PostsAdding from "../views/PostsAdding";
import * as postApi from '../../api/post-api';
import findIndexByKeyValue from "../../modules/findIndexByKeyValue";

import { connect } from 'react-redux';
import store from '../../store';

const PostsContainer = React.createClass({

  
  /* Get Posts */
  componentDidMount() {
    //postApi.getPosts().then(posts => {
    //  this.setState({posts: posts})
    //})
    postApi.getPosts();
  },
  
  /* Add Post */
  //addPost(post) {
  //  postApi.addPost(post).then(postAdded => {
  //    var newPosts = this.props.posts.concat([postAdded])
  //    this.setState({posts: newPosts})
  //  })    
  //}
  
  /* Delete Post */
  //deletePost(postId) {
  //  var posts = this.props.posts      
  //  postApi.deletePost(postId).then(() => {
  //    var i = findIndexByKeyValue(posts,"_id", postId)
  //
  //    var newPosts = [...posts.slice(0, i),
  //                ...posts.slice(i+1)]
  //    
  //    this.setState({
  //      posts: newPosts
  //    })
  //  })
  //},

  render() {
    return (
      <div>
        <PostsList posts={this.props.posts} deletePost={postApi.deletePost} />
        //<PostsAdding addPost={this.addPost.bind(this)}/>
      </div>
    );
  }
  
})

const mapStateToProps = function(store) {
  return {
    posts: store.postsState
  };
};

export default connect(mapStateToProps)(PostsContainer);
