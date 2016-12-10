import React, {Component} from "react";
import CommentItem from "./CommentItem";

const CommentsList = ({comments, likeCom, deleteCom}) => (
    <ul className="comment-list block-comments">    
    {      
        comments.map(comment =>
            <CommentItem key={comment._id}  comment={comment} onClicky={() => likeCom(comment._id)} onClickDelete={() => deleteCom(comment._id)} />
        )
    }
    </ul>
)
    
export default CommentsList

