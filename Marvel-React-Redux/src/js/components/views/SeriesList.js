import React, {Component} from "react";
import SerieItem from "./SerieItem";

const SeriesList = ({marvel}) => (
    <div>
        <h2>Series</h2>
        <ul className="marvel__list">
        {      
            (marvel.series.items).map(serie =>
                <SerieItem key={serie.resourceURI}  serie={serie} />
            )
        }
        </ul>
    </div>
)
    
export default SeriesList
