import React, {Component} from "react";
import { Link } from 'react-router';

import ComicsList from "./ComicsList";
import SeriesList from "./SeriesList";

const MarvelInfos = ({marvel}) => (
    <div className="row">
        <h2 className="title">Fiche d'identité :</h2>
        <div className="medium-4 columns">
            <img src={marvel.thumbnail.path + "." + marvel.thumbnail.extension} alt={marvel.name}/>
        </div>
        <div className="medium-8 columns">
            <h1>{marvel.name}</h1>
            <p>{marvel.description}</p>
            <ComicsList marvel={marvel} />
            <SeriesList marvel={marvel} />
        </div>        
    </div>
)
    
export default MarvelInfos