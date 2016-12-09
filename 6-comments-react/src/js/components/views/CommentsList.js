import React, {Component} from "react";
import CommentItem from "./CommentItem";

const CommentsList = ({comments, likeCom, deleteCom}) => (
    <ul className="comment-list block-comments">    
    {      
        comments.map(comment =>
            <CommentItem key={comment.id}  comment={comment} onClicky={() => likeCom(comment.id)} onClickDelete={() => deleteCom(comment.id)} />
        )        
    }
    </ul>
)
    
export default CommentsList

