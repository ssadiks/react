import React, { Component } from "react";
import { Link } from 'react-router';

const AbilitiesItem = ({ability}) => {
    {console.log(ability)}
    return (
    <li>
        <div className="pokemon__list__item">
            <span className=""> {ability.ability.name } </span>
        </div>
    </li>
    )
    
}

export default AbilitiesItem