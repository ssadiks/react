import React, {Component} from "react";
import PokemonsItem from "./PokemonsItem"

const PokemonsList = ({pokemons, pokemonsStates}) => (
    <div className="pokemons-list">
        {pokemonsStates.isFetching === true &&
        <div className="overlay">
            <div className="loader">
                <div className="loader__item"></div>
                <div className="loader__item"></div>
                <div className="loader__item"></div>
                <div className="loader__item"></div>
            </div>
        </div>
        }
        <h2 className="title">Reactive Pokedex Frontend CS</h2>
        <ul className="row">
        {
            pokemons.map(pokemon =>
                <PokemonsItem key={pokemon.url}  pokemon={pokemon} />
            )        
        }
        </ul>
        {pokemonsStates.didInvalidate === true &&
        <div className="error">
            Une erreur s'est produite lors du chargement
        </div>
        }
    </div>
)
    
export default PokemonsList