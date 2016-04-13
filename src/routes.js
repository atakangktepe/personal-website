import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './components/home/';
import About from './components/about/';
import Blog from './components/blog/';
import App from './components/';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
  </Route>
)
