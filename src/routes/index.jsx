import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from 'container/Home';

export default function MyRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
