import React, {Component} from 'react'

export default class AddComment extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault()
        var timestamp = (new Date()).getTime()
        var comment = {
            "name": this.refs.name.value,
            "message": this.refs.message.value,
            "date_com": timestamp,
            "likes": 0
        }
        this.props.addComment(comment)
        this.refs.commentForm.reset()
    }
    
    render() {
        return (
            <div className="callout secondary">
                <h4 className="leave-comment">Add a Comment</h4>
                <form className="post-edit" ref="commentForm" onSubmit={this.handleSubmit}>
                  <input type="text" ref="name" placeholder="Your Name" required/>
                  <textarea ref="message" placeholder="Add your comment here" required/>
                  <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
                </form>
            </div>
        )
    }
}
