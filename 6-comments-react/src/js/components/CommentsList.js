import React, {Component} from "react";
import CommentItem from "./CommentItem"

const CommentsList = ({comments}) => (
    <ul>
    { comments.map(comment =>
        <CommentItem key={comment.id}  comment={comment} />
    )}
    </ul>
)
    
export default CommentsList