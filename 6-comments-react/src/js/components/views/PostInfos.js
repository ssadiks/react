import React, {Component} from "react";

const PostInfos = ({post, likePost}) => (
    <div className="posts comment-list block-comments">  
        <div>
          <h1>{post.title}</h1>
          <div className="post__like">            
            <button className="button" onClick={() => likePost(post._id)}>Like</button>
            <span className="comments-infos__item count-likes">{post.likes} Likes</span>
          </div>
          
        </div>  
        <p>{post.text}</p>
    
    </div>
)
    
export default PostInfos