import React, {Component} from "react";
import MarvelsItem from "./MarvelsItem"

const MarvelsList = ({marvels}) => (
    <div>
        <h2 className="title">Liste des super héros :</h2>
        <ul className="row">
        {
            marvels.map(marvel =>
                <MarvelsItem key={marvel.id}  marvel={marvel} />
            )        
        }
        </ul>
    </div>
)
    
export default MarvelsList