import React from "react";

import PostInfos from "../views/PostInfos";
import * as postApi from '../../api/post-api';

import CommentsList from "../views/CommentsList";
import CommentAdding from "../views/CommentAdding";
import CommentsInfos from "../views/CommentsInfos";

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
    
  componentDidMount() {
    let postId = this.props.params.postId
    postApi.getPost(postId).then(post => {
      this.setState({post: post}) 
    });
  }
  
  addComment(comment) {
    postApi.addComment(this.props.params.postId, comment).then(commentAdded => {
      this.setState({
        post: {comments: this.state.post.comments.concat([commentAdded])}
      })
    })
  }
  
  deleteCom(commentId) {
    var post = this.state.post
    postApi.deleteComment(this.props.params.postId, commentId).then(() => {
      var i = findIndexByKeyValue(post.comments,"_id", commentId)
      console.log(i);
      var newComments = [...post.comments.slice(0, i),
                  ...post.comments.slice(i+1)]
  
      this.setState({
        post: {comments: newComments}
      })
    })
    
  }
  
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

  render() {
    return (
      <div>
        <PostInfos {...this.state} />
        <CommentsInfos comments={this.state.post.comments} />
        <CommentsList likeCom={this.likeCom.bind(this)} deleteCom={this.deleteCom.bind(this)} comments={this.state.post.comments} />
        <CommentAdding addComment={this.addComment.bind(this)} />
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
