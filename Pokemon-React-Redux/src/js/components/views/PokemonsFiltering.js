 import React, {Component} from "react";

const PokemonsFiltering = ({onChange}) => (
    <div className="posts-filter">
        <h2>Search Pokemon</h2>
        <input type="text" onKeyUp={e => onChange(e.target.value)} />
    </div>
)
    
export default PokemonsFiltering