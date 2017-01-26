import React from 'react';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/MainLayout';

// Pages
import MarvelsContainer from "./components/containers/MarvelsContainer";
import MarvelContainer from "./components/containers/MarvelContainer";

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
        <Route path="/" component={MarvelsContainer} />
        <Route path="characters">
            <IndexRoute component={MarvelsContainer} />
            <Route path=":charactersId" component={MarvelContainer} />
        </Route>
    </Route>
  </Router>
);