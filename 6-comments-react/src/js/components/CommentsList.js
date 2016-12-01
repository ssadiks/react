import React, {Component} from "react";
import CommentItem from "./CommentItem"

const CommentsList = ({comments, likeCom}) => (
    <ul className="comment-list block-comments">
    { comments.map(comment =>
        <CommentItem key={comment.id}  comment={comment} onClick={() => likeCom(comment.id)}/>
    )}
    </ul>
)
    
export default CommentsList