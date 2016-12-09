import React from "react";

import CommentsList from "../views/CommentsList";
import CommentAdding from "../views/CommentAdding";
import CommentsInfos from "../views/CommentsInfos";
import PostInfos from "../views/PostInfos";


export default class PostContainer extends React.Component {
  constructor() {
    super();
    //this.findIndexByKeyValue = this.findIndexByKeyValue.bind(this)
    this.state = {
      post:
        {
          title: "post 1",
          text: "Victoire écrasante des Spurs de San Antonio sur les Golden States de San Francisco",
          likes: "2",
          comments: [
             {
              "id": "1",
              "name": "Soso",
              "message": "Big TP",
              "date_com": "1480600060328",
              "likes": 0
            },
            {
              "id": "2",
              "name": "Jean Luc",
              "message": "Klay thompson est noir",
              "date_com": "1450000000000",
              "likes": 1
            }
          ]
        }      
    };
  }
  
  addComment(comment) {
    this.setState({
      post: {comments: this.state.post.comments.concat([comment])}
    })
    //var coms = Object.assign({}, this.state.comments.concat([comment]))
    //console.log(coms)
    //coms.concat([comment])
    //this.setState({
    //  comments: coms
    //})
  }
  
  
  
  
  
  
  deleteCom(commentId) {
    var post = this.state.post
    
    var i = findIndexByKeyValue(post.comments,"id", commentId)
    //var toto = coms.slice(0, i).concat(coms.slice(i+1))
    var newComments = [...post.comments.slice(0, i),
                ...post.comments.slice(i+1)]

    this.setState({
      post: {comments: newComments}
    })
  }

  
  likeCom(commentId) {
    var coms = this.state.post.comments
    coms.map(comment =>             
        {
          if(comment.id == commentId) {
            //var commentUpdated = Object.assign({}, comment, comment.likes++)
            return {...comment, ...comment.likes++}
          }
        }
    )    
    
    this.setState({
      comments: coms
    })
  }

  render() {
    return (
      <div>
        <PostInfos post={this.state.post}></PostInfos>
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
