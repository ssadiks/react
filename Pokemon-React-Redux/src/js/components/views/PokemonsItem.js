import React from 'react';
import { Link } from 'react-router';

const PokemonsItem = ({pokemon}) => 
  {
    const pokemonId = pokemon.url.replace("http://pokeapi.co/api/v2/pokemon/", "").slice(0, -1);
    return (
    <li className="small-12 medium-6 large-4 columns">
        <div className="pokemonItem">
            <div className="pokemonItem__txt">
                <Link to={'pokemons/' + pokemonId }>
                    <div className="pokemonItem__name"> {pokemon.name} </div>
                </Link>
            </div>
            
        </div>
    </li>
    )
  }


export default PokemonsItem