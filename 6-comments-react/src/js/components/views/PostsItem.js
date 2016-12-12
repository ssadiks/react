import React from 'react';
import { Link } from 'react-router';

const PostsItem = ({post, onClickDelete}) => 
  (
    <li>
        <div className="comment-user">
            <span className="comment-user__name"> {post.title } </span>
            <span className="comment-user__name"> {post.likes } Likes </span>
            <Link className="post__cta-more" to={'posts/' + post._id }>En savoir +</Link>
            <button className="post__cta-delete" onClick={onClickDelete}>Delete Post</button>
        </div>
    </li>
  )


export default PostsItem