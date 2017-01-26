import React, {Component} from 'react'

export default class PostsAdding extends Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault()
        var post = {
            "title": this.refs.title.value,
            "text": this.refs.post.value,
            "likes": 0,
            "comments": []
        }
        this.props.addPost(post)
        this.refs.postForm.reset()
    }
    
    render() {
        return (
            <div className="callout secondary">
                <h4 className="leave-comment">Add a Post</h4>
                <form className="post-edit" ref="postForm" onSubmit={this.handleSubmit}>
                  <input type="text" ref="title" placeholder="Title" required/>
                  <textarea ref="post" placeholder="Write your post" required/>
                  <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Post</button>
                </form>
            </div>
        )
    }
}