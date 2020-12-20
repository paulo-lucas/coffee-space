import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/Header';

import Writer from './pages/Writers';

export default function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <Switch>
          
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
          <Route path="/writers/:writer">
            <Writer />
          </Route>
          <Route path="/writers">
            <Writers />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Writers() {
  return <h2>Users</h2>;
}