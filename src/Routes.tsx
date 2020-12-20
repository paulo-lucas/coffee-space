import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/Header';

import Writers from './pages/Writers';
import WriterProfile from './pages/WriterProfile';

export default function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/articles">
            <Articles />
          </Route>

          <Route path="/writers/:writer">
            <WriterProfile />
          </Route>

          <Route path="/writers">
            <Writers />
          </Route>

          <Route path="/about">
            <About />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

function About() {
  return <div><h1> About </h1></div>;
}

function Home() {
  return <div><h1> Homee </h1></div>;
}

function Articles() {
  return <div><h1> articles </h1></div>;
}