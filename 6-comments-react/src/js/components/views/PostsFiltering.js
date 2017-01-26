 import React, {Component} from "react";

const PostsFiltering = ({onChange}) => (
    <div className="posts-filter">    
        <select onChange={e => onChange(e.target.value)}>
            <option value="SHOW_ALL">ALL</option>
            <option value="SHOW_SUB_DIX">Sup 10</option>
            <option value="SHOW_SUB_VINGTH">Sup 20</option>
            <option value="SHOW_SUB_TRENTE">Sup 30</option>
        </select>
    </div>
)
    
export default PostsFiltering