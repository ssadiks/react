import React, { Component } from "react";
import { Link } from 'react-router';

const ComicItem = ({comic}) => {
    
    return (
    <li>
        <div className="pokemon__list__item">
            <a href={comic.resourceURI}>
                <span className=""> {comic.name } </span>
            </a>
        </div>
    </li>
    )
    
}

export default ComicItem