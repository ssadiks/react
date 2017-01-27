import React, {Component} from "react";
import AbilitiesItem from "./AbilitiesItem";

const AbilitiesList = ({pokemon}) => (
    <div>
        <h2>Abilities</h2>
        <ul className="pokemon__list">
        {      
            (pokemon.abilities).map(ability =>
                <AbilitiesItem key={ability.ability.url}  ability={ability} />
            )
        }
        </ul>
    </div>
)
    
export default AbilitiesList
