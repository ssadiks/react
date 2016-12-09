import React from 'react'

const CommentInfos = ({comments}) => {
    let likes = 0
    {comments.map(comment =>
        likes += comment.likes              
    )}
    return (
    <div className="comments-infos">
        <span className="comments-infos__item count-coms">{comments.length} Commentaires</span>
        <span className="comments-infos__item count-likes">{likes} Likes</span>
    </div>
    )
}

export default CommentInfos