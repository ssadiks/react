import React from 'react';
import { Link } from 'react-router';

export default class PostsList extends React.Component{
  render() {
    return (
      <ul className="posts-list">
        <li><Link to="posts/2">Michael</Link></li>
        <li><Link to="posts/1">Ryan</Link></li>
        <li><Link to="posts/3">Dan</Link></li>
        <li><Link to="posts/4">Matt</Link></li>
        <li><Link to="posts/5">Tobias</Link></li>
        <li><Link to="posts/6">Sebastian</Link></li>
      </ul>
    );
  }
};
