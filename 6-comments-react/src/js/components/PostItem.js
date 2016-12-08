import React from 'react';
import { Link } from 'react-router';

const PostItem = ({post}) => 
  (
    <li>
        <div className="comment-user">
            <span className="comment-user__name"> {post.title } </span>
            <Link to={'post/' + post.id }>En savoir +</Link>
        </div>
    </li>
  )


export default PostItem