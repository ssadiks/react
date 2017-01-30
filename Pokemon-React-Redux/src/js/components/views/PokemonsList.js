import React, {Component} from "react";
import PokemonsItem from "./PokemonsItem"

const PokemonsList = ({pokemons}) => (
    <div>
        <h2 className="title">Reactive Pokedex Frontend CS</h2>
        <ul className="row">
        {
            pokemons.map(pokemon =>
                <PokemonsItem key={pokemon.url}  pokemon={pokemon} />
            )        
        }
        </ul>
    </div>
)
    
export default PokemonsList