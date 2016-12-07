import React from 'react';

export default class PostItem extends React.Component {
  render() {
    return (<h1>User Profile for postId: {this.props.params.postId}</h1>);
  }
}

