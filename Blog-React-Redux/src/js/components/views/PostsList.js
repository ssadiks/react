import React, {Component} from "react";
import PostsItem from "./PostsItem"

const PostsList = ({posts, deletePost}) => (
    <ul className="posts comment-list block-comments">
    {
        
        posts.map(post =>
            <PostsItem key={post._id}  post={post} onClickDelete={() => deletePost(post._id)} />
        )        
    }
    </ul>
)
    
export default PostsList