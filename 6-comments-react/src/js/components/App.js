import React from "react";

import Header from "./Header";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      comments: [
           {
            "id": "1",
            "name": "soso",
            "message": "yo les mecs\n"
          },
          {
            "id": "2",
            "name": "toto",
            "message": "ddsqds"
          }
      ]
      
    };
  }
  
  addComment(comment) {    
    console.log('ajout')
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <CommentsList comments={this.state.comments}/>
        <AddComment addComment={this.addComment} />
      </div>
    );
  }
}
