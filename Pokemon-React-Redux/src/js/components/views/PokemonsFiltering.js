 import React, {Component} from "react";
import { Link } from 'react-router';

const PokemonsFiltering = ({onChange, refreshApp}) => (
    <div className="posts-filter">
        <h2>Search Pokemon</h2>
        <button className="button" onClick={refreshApp}>Refresh App</button>
        <input type="text" placeholder="Search" onKeyUp={e => onChange(e.target.value)} />
    </div>
)
    
export default PokemonsFiltering