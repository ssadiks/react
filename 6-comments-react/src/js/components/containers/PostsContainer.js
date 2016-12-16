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
    postApi.getPosts();
  },

  render() {
    return (
      <div>
        <PostsList posts={this.props.posts} deletePost={postApi.deletePost} />
        <PostsAdding addPost={postApi.addPost}/>
      </div>
    );
  }
  
})

const mapStateToProps = function(store) {
  return {
    posts: store.postsState.posts
  };
};

export default connect(mapStateToProps)(PostsContainer);