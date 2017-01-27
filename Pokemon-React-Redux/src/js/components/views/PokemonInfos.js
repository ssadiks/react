import React, {Component} from "react";
import { Link } from 'react-router';

import AbilitiesList from "./AbilitiesList";

const PokemonInfos = ({pokemon}) => {
    return (    
    <div className="row">
        <h2 className="title">Fiche d'identité :</h2>
        <div className="medium-4 columns">
            <h1>{pokemon.forms[0].name}</h1>
            <img src={pokemon.sprites.front_default} />
        </div>
        <div className="medium-8 columns">            
            <AbilitiesList pokemon={pokemon} />
        </div>        
    </div>
    )
}
    
export default PokemonInfos