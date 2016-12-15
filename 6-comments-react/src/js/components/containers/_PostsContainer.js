import React from "react";

import PostsList from "../views/PostsList";
import PostsAdding from "../views/PostsAdding";
import * as postApi from '../../api/post-api';
import findIndexByKeyValue from "../../modules/findIndexByKeyValue";

export default class PostsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []      
    };
  }
  
  /* Get Posts */
  componentDidMount() {
    postApi.getPosts().then(posts => {
      this.setState({posts: posts})
    })
  }
  
  /* Add Post */
  addPost(post) {
    postApi.addPost(post).then(postAdded => {
      var newPosts = this.state.posts.concat([postAdded])
      this.setState({posts: newPosts})
    })    
  }
  
  /* Delete Post */
  deletePost(postId) {
    var posts = this.state.posts      
    postApi.deletePost(postId).then(() => {
      var i = findIndexByKeyValue(posts,"_id", postId)

      var newPosts = [...posts.slice(0, i),
                  ...posts.slice(i+1)]
      
      this.setState({
        posts: newPosts
      })
    })
  }

  render() {
    return (
      <div>
        <PostsList posts={this.state.posts} deletePost={this.deletePost.bind(this)} />
        <PostsAdding addPost={this.addPost.bind(this)}/>
      </div>
    );
  }
}

