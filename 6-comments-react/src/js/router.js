import React from 'react';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/MainLayout';

// Pages
import Home from './components/Home';
import PostsContainer from "./components/containers/PostsContainer";
import PostContainer from "./components/containers/PostContainer";

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
        <Route path="/" component={Home} />
        <Route path="posts">
            <IndexRoute component={PostsContainer} />
            <Route path=":postId" component={PostContainer} />
        </Route>
    </Route>
  </Router>
);