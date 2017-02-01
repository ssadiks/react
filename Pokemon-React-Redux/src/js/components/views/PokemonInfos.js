import React, {Component} from "react";
import { Link } from 'react-router';

import AbilitiesList from "./AbilitiesList";

const PokemonInfos = ({pokemon, pokemonStates}) => {
    return (    
    <div className="row">
        {pokemonStates.isFetching === true &&
        <div className="overlay">
            <div className="loader">
                <div className="loader__item"></div>
                <div className="loader__item"></div>
                <div className="loader__item"></div>
                <div className="loader__item"></div>
            </div>
        </div>
        }
        <h2 className="title">Informations :</h2>
        {pokemon.forms !== undefined &&
        <div className="informations">
            <div className="medium-4 columns">
                <h1>{pokemon.forms[0].name}</h1>
                <img src={pokemon.sprites.front_default} />
            </div>
            <div className="medium-8 columns">            
                <AbilitiesList pokemon={pokemon} />
            </div>            
        </div>
        }
        {pokemonStates.didInvalidate === true &&
            <p className="error">
                Une erreur s'est produite lors du chargement
            </p>
        }
    </div>
    )
}
    
export default PokemonInfos