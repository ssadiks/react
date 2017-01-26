import React, {Component} from "react";
import ComicItem from "./ComicItem";

const ComicsList = ({marvel}) => (
    <div>
        <h2>Comics</h2>
        <ul className="marvel__list">
        {      
            (marvel.comics.items).map(comic =>
                <ComicItem key={comic.resourceURI}  comic={comic} />
            )
        }
        </ul>
    </div>
)
    
export default ComicsList
