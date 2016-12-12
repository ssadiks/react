import React from "react";

import PostsList from "../views/PostsList";
import PostsAdding from "../views/PostsAdding";
import * as postApi from '../../api/post-api';

export default class PostsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []      
    };
  }
  
  componentDidMount() {
    postApi.getPosts().then(posts => {
      this.setState({posts: posts})
    })
  }
  
  addPost(post) {
    postApi.addPost(post).then(postAdded => {
      var newPosts = this.state.posts.concat([postAdded])
      this.setState({posts: newPosts})
    })    
  }
  
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

const findIndexByKeyValue = (arraytosearch, key, valuetosearch) => { 
  for (var i = 0; i < arraytosearch.length; i++) {     
    if (arraytosearch[i][key] == valuetosearch) {
      return i;
    }
  }
  return null;
}