import React from "react";

import PostsList from "../views/PostsList";
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

  render() {
    return (
      <div>
        <PostsList posts={this.state.posts} />
      </div>
    );
  }
}
