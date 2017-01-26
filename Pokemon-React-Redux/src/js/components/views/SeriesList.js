import React, {Component} from "react";
import SerieItem from "./SerieItem";

const SeriesList = ({pokemon}) => (
    <div>
        <h2>Series</h2>
        <ul className="pokemon__list">
        {      
            (pokemon.series.items).map(serie =>
                <SerieItem key={serie.resourceURI}  serie={serie} />
            )
        }
        </ul>
    </div>
)
    
export default SeriesList
