import React, { Component } from "react";
import { Link } from 'react-router';

const SerieItem = ({serie}) => {
    
    return (
    <li>
        <div className="pokemon__list__item">
            <a href={serie.resourceURI}>
                <span className=""> {serie.name } </span>
            </a>
        </div>
    </li>
    )
    
}

export default SerieItem