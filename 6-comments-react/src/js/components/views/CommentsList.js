import React, {Component} from "react";
import CommentItem from "./CommentItem";

const CommentsList = ({post, likeCom, deleteCom}) => (
    <ul className="comment-list block-comments">    
    {      
        (post.comments).map(comment =>
            <CommentItem key={comment._id}  comment={comment} onClicky={() => likeCom(post._id, comment._id, comment)} onClickDelete={() => deleteCom(post._id, comment._id)} />
        )
    }
    </ul>
)
    
export default CommentsList

