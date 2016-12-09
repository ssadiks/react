import React, {Component} from "react";

const PostInfos = ({post}) => (
    <div className="posts comment-list block-comments">  
      
        <h1>{post.title}</h1>
        <p>{post.text}</p>
    
    </div>
)
    
export default PostInfos