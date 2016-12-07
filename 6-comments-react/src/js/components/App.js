import React from "react";

import Header from "./Header";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import CommentsInfos from "./CommentsInfos";


export default class App extends React.Component {
  constructor() {
    super();
    //this.findIndexByKeyValue = this.findIndexByKeyValue.bind(this)
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
    //var coms = Object.assign({}, this.state.comments.concat([comment]))
    //console.log(coms)
    //coms.concat([comment])
    //this.setState({
    //  comments: coms
    //})
  }
  
  
  
  
  
  
  deleteCom(commentId) {
    var coms = this.state.comments
    
    var i = findIndexByKeyValue(coms,"id", commentId)

    //var toto = coms.slice(0, i).concat(coms.slice(i+1))
    var toto = [...coms.slice(0, i),
                ...coms.slice(i+1)]
        
    this.setState({
      comments: toto
    })
  }

  changeTitle(title) {
    this.setState({title});
  }
  
  likeCom(commentId) {
    var coms = this.state.comments
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
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <CommentsInfos comments={this.state.comments} />
        <CommentsList likeCom={this.likeCom.bind(this)} deleteCom={this.deleteCom.bind(this)} comments={this.state.comments} />
        <AddComment addComment={this.addComment.bind(this)} />
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
