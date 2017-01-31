 import React, {Component} from "react";
import { Link } from 'react-router';

const PokemonsFiltering = ({onChange, refreshApp}) => (
    <div className="posts-filter">
        <h2>Search Pokemon</h2>
        <Link className="button" to={'/'}>Refresh App</Link>
        <input type="text" placeholder="Search" onKeyUp={e => onChange(e.target.value)} />
    </div>
)
    
export default PokemonsFiltering