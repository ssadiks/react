import React from "react";
import { connect } from 'react-redux';
import store from '../../store';

import PostsList from "../views/PostsList";
import PostsAdding from "../views/PostsAdding";
import PostsFiltering from "../views/PostsFiltering";

import * as postApi from '../../api/post-api';
import findIndexByKeyValue from "../../modules/findIndexByKeyValue";

const PostsContainer = React.createClass({
  
  /* Get Posts */
  componentDidMount() {
    postApi.getPosts();
  },  
  getVisiblePosts(posts, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return posts
      case 'SHOW_COMPLETED':
        return posts.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return posts.filter(t => !t.completed)
    }
  },
  render() {
    return (
      <div>
        <PostsFiltering onChange={setVisibleFilter.bind(this)}/>
        <PostsList posts={this.props.posts} deletePost={postApi.deletePost} />
        <PostsAdding addPost={postApi.addPost}/>
      </div>
    );
  }
  
})

const getVisiblePosts = (posts, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return posts
    case 'SHOW_SUP_DIX':
      return posts.filter(p => p.likes > 10)
    case 'SHOW_SUP_VINGT':
      return posts.filter(p => p.likes > 20)
    case 'SHOW_SUP_TRENTE':
      return posts.filter(p => p.likes > 30)
  }
}

const mapStateToProps = function(store) {
  return {
    posts: getVisiblePosts(store.postsState.posts, store.visibilityFilterState.initialVisibility)
  };
};

export default connect(mapStateToProps)(PostsContainer);