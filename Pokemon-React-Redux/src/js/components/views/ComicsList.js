import React, {Component} from "react";
import ComicItem from "./ComicItem";

const ComicsList = ({pokemon}) => (
    <div>
        <h2>Comics</h2>
        <ul className="pokemon__list">
        {      
            (pokemon.comics.items).map(comic =>
                <ComicItem key={comic.resourceURI}  comic={comic} />
            )
        }
        </ul>
    </div>
)
    
export default ComicsList
