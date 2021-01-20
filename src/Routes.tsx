import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/Header';

import Home from './pages/Home';
import Feed from './pages/Feed';
import Post from './pages/Post';
import Convert from './pages/Convert';
import About from './pages/About';


export default function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/posts/:post">
          <Post />
        </Route>

        <Route path="/posts">
          <Feed />
        </Route>

        <Route path="/convert">
          <Convert />
        </Route>

        <Route path="/about">
          <About />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}