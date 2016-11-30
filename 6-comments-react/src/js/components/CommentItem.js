import React, { Component } from "react";

const CommentItem = ({comment}) => (
    <li>
        <span>{comment.name } </span>
        <span>{comment.message } </span>
    </li>
)

export default CommentItem