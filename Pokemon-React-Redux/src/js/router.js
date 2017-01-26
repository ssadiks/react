import React from 'react';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/MainLayout';

// Pages
import PokemonsContainer from "./components/containers/PokemonsContainer";
import PokemonContainer from "./components/containers/PokemonContainer";

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
        <Route path="/" component={PokemonsContainer} />
        <Route path="pokemons">
            <IndexRoute component={PokemonsContainer} />
            <Route path=":pokemonsId" component={PokemonContainer} />
        </Route>
    </Route>
  </Router>
);