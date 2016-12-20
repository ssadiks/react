import React from "react";
import { connect } from 'react-redux';
import store from '../../store';
import { Link } from 'react-router';

import PostInfos from "../views/PostInfos";
import * as postApi from '../../api/post-api';

import CommentsList from "../views/CommentsList";
import CommentAdding from "../views/CommentAdding";
import CommentsInfos from "../views/CommentsInfos";

const PostContainer = React.createClass({
  
  /* Get Post By Id Url */
  componentDidMount() {
    let postId = this.props.params.postId
    postApi.getPost(postId)
  },
  render() {
    return (
      <div>
        <PostInfos post={this.props.post} likePost={postApi.likePost} />
        <CommentsInfos comments={this.props.post.comments} />
        <CommentsList likeCom={postApi.likeComment} deleteCom={postApi.deleteComment} post={this.props.post} />
        <CommentAdding post={this.props.post} addComment={postApi.addComment} />
        <Link className="button" to={'posts'}>Back</Link>
      </div>
    );
  }
})

const mapStateToProps = function(store) {
  return {
    post: store.postsState.post
  }
}

export default connect(mapStateToProps)(PostContainer);