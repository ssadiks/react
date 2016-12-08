import React from 'react';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/MainLayout';

// Pages
import Home from './components/Home';
import PostsList from './components/PostsList';
import PostItem from './components/PostItem';
import App from "./components/App";
import PostsContainer from "./components/PostsContainer";

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
        <Route path="/" component={Home} />
        <Route path="posts">
            <IndexRoute component={PostsContainer} />
            <Route path=":postId" component={PostItem} />
        </Route>
    </Route>
  </Router>
);