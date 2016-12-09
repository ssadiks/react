import React from "react";

import PostsList from "../views/PostsList";


export default class PostsContainer extends React.Component {
  constructor() {
    super();
    //this.findIndexByKeyValue = this.findIndexByKeyValue.bind(this)
    this.state = {
      title: "Welcome",
      posts: [
        {
          id: "78",  
          title: "Big Match",
          text: "Victoire écrasante des Spurs de San Antonio sur les Golden States de San Francisco",
          likes: "2",
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
        },
        {
          id: "79",
          title: "Dérouillé",
          text: "Victoire écrasante des Cavs sur les Knicks",
          likes: "3",
          comments: [
             {
              "id": "1",
              "name": "soso",
              "message": "La honte",
              "date_com": "1480600060328",
              "likes": 0
            },
            {
              "id": "2",
              "name": "Mr Dupont",
              "message": "Ils sont nul",
              "date_com": "1450000000000",
              "likes": 1
            }
          ]
        }
      ]      
    };
  }
  

  changeTitle(title) {
    this.setState({title});
  }  


  render() {
    return (
      <div>
        <PostsList posts={this.state.posts} />
      </div>
    );
  }
}
