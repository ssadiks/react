import React from 'react';
import { Link } from 'react-router';

const PostsItem = ({post}) => 
  (
    <li>
        <div className="comment-user">
            <span className="comment-user__name"> {post.title } </span>
            <span className="comment-user__name"> {post.likes } Likes </span>
            <Link to={'posts/' + post.id }>En savoir +</Link>
        </div>
    </li>
  )


export default PostsItem