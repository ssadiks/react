import React, {Component} from "react";
import PostsItem from "./PostsItem"

const PostsList = ({posts}) => (
    <ul className="posts comment-list block-comments">    
    {      
        posts.map(post =>
            <PostsItem key={post._id}  post={post} />
        )        
    }
    </ul>
)
    
export default PostsList