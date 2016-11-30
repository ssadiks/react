import React, {Component} from 'react'

export default class AddComment extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.addComment()
        this.refs.commentForm.reset()
    }
    
    render() {
        return (
            <div>
                <h4 className="leave-comment">Add a Comment</h4>
                <form className="post-edit" ref="commentForm" onSubmit={this.handleSubmit}>
                  <input type="text" ref="name" placeholder="Your Name" required/>
                  <textarea ref="desc" placeholder="Add your comment here" required/>
                  <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
                </form>
            </div>
        )
    }
}
