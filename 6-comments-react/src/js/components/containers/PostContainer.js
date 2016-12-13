import React from "react";

import PostInfos from "../views/PostInfos";
import * as postApi from '../../api/post-api';

import CommentsList from "../views/CommentsList";
import CommentAdding from "../views/CommentAdding";
import CommentsInfos from "../views/CommentsInfos";

import findIndexByKeyValue from "../../modules/findIndexByKeyValue";

export default class PostContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      post:
        {
          _id: null,
          title: null,
          text: null,
          likes: null,
          comments: []
        }
    };
  }
    
  /* Get Post By Id Url */
  componentDidMount() {
    let postId = this.props.params.postId
    postApi.getPost(postId).then(post => {
      this.setState({post: post}) 
    });
  }
  
  /* Add a Comment */
  addComment(comment) {
    postApi.addComment(this.props.params.postId, comment).then(postUpdated => {
      
      this.setState({
        post: postUpdated
      })
      console.log(this.state.post)
    })
  }
  
  /* Delete a Comment */
  deleteCom(commentId) {
    var post = this.state.post
    let postUpdated = {}
    postApi.deleteComment(this.props.params.postId, commentId).then(() => {
      var i = findIndexByKeyValue(post.comments,"_id", commentId)
      console.log(i);
         
      var newComments = [...post.comments.slice(0, i),
                  ...post.comments.slice(i+1)]
      
      postUpdated = Object.assign({}, post, post.comments = newComments)
      
  
      console.log(postUpdated)
      
      this.setState({
        post: postUpdated
      })
      
    })
    
  }
  
  /* Like a Comment => Update Comment*/
  likeCom(commentId) {
    var coms = this.state.post.comments;
    var commentUpdated = {};    
    
    coms.map(comment =>             
      {
        if(comment._id == commentId) {
          //commentUpdated = Object.assign({}, comment, comment.likes++)            
          commentUpdated = {...comment, ...comment.likes++}
        }
      }
    )
    
    postApi.updateComment(this.props.params.postId, commentId, commentUpdated).then(() => {
      this.setState({
        comments: coms
      })
    })
    
  }
  
  /* Like a Post => Update Post*/
  likePost(postId) {
    let postUpdated = {}    
    postUpdated = {...this.state.post, ...this.state.post.likes++}
    
    postApi.updatePost(postId, postUpdated).then(post => {
        this.setState({
        post: postUpdated
      })
    })
  }

  render() {
    return (
      <div>
        <PostInfos {...this.state} likePost={this.likePost.bind(this)} />
        <CommentsInfos comments={this.state.post.comments} />
        <CommentsList likeCom={this.likeCom.bind(this)} deleteCom={this.deleteCom.bind(this)} comments={this.state.post.comments} />
        <CommentAdding addComment={this.addComment.bind(this)} />
      </div>
    );
  }
}
