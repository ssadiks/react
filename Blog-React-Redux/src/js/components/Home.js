import React from 'react';

const Home = React.createClass({
  render: function() {
    var dataPost = {
      "title": "The Knicks on the rise",
      "text": "The Knicks dominate the Lakers after an exciting match: final score (118 - 112)",
      "likes": 0,
      "comments": [
      {
        "name": "Melo",
        "message": "Porzingis's Day",
        "date_com": "1481538399429",
        "likes": 0,
        "_id": "584e7b5fa5ec222988121e2b"
      }
    ]
    }
    return (
      <div className="home-page">
        <h1>B L O G  -  R E A C T</h1>
        <h2>Example : Json Post</h2>
        <div><pre><code>{JSON.stringify(dataPost, null, 2) }</code></pre></div>
        <p>Command Run Server Api on <a href="localhost:3030/api/posts">port 3030</a> => node server/server.js</p>
        <p>
          FRONT : ReactJs
        </p> 
        <p>
          BACK : NodeJs(Express) | Mongoose | MongoDb
        </p>
        <p>
          Github : <a href="https://github.com/ssadiks">ssadiks</a>
        </p>
      </div>
    );
  }
});

export default Home;