import React from "react";

import Header from "./Header";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import CommentsInfos from "./CommentsInfos";


export default class App extends React.Component {
  constructor() {
    super();
    //this.addComment = this.addComment.bind(this)
    this.state = {
      title: "Welcome",
      comments: [
           {
            "id": "1",
            "name": "soso",
            "message": "yo les mecs\n",
            "date_com": "1480600060328",
            "likes": 0
          },
          {
            "id": "2",
            "name": "Mr Dupont",
            "message": "Ravi de faire votre connaissance",
            "date_com": "1450000000000",
            "likes": 1
          }
      ]
      
    };
  }
  
  addComment(comment) {
    this.setState({
      comments: this.state.comments.concat([comment])
    })
  }

  changeTitle(title) {
    this.setState({title});
  }
  
  likeCom(commentId) {
    //console.log(this.state.comments[2])
    {var coms = this.state.comments.map(comment =>             
        {if(comment.id == commentId)
          {comment.likes+1}
          console.log(comment)
        }
    )}
    
    //this.setState({
    //  comments: coms
    //})
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <CommentsInfos comments={this.state.comments} />
        <CommentsList likeCom={this.likeCom.bind(this)} comments={this.state.comments} />
        <AddComment addComment={this.addComment.bind(this)} />
      </div>
    );
  }
}
