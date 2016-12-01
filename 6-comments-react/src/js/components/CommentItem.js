import React, { Component } from "react";

const CommentItem = ({comment, onClick}) => {
    let d = new Date()
    d.setTime(comment.date_com)

    return (
    <li>
        <div className="comment-user">
            <span className="comment-user__name"> {comment.name } </span> 
            <span className="comment-user__date"> { d.getFullYear()}-{d.getMonth()}-{d.getDate()} </span>
            <span>{comment.likes }Likes</span>
        </div>
        <div className="comment-text">{comment.message } </div>
        <button className="button" onClick={onClick}>Like</button>
    </li>
    )
    
}

export default CommentItem