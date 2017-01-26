import React, {Component} from "react";
import { Link } from 'react-router';

import ComicsList from "./ComicsList";
import SeriesList from "./SeriesList";

const MarvelInfos = ({pokemon}) => (
    <div className="row">
        <h2 className="title">Fiche d'identité :</h2>
        <div className="medium-4 columns">
            <img src={pokemon.thumbnail.path + "." + pokemon.thumbnail.extension} alt={pokemon.name}/>
        </div>
        <div className="medium-8 columns">
            <h1>{pokemon.name}</h1>
            <p>{pokemon.description}</p>
            <ComicsList pokemon={pokemon} />
            <SeriesList pokemon={pokemon} />
        </div>        
    </div>
)
    
export default MarvelInfos