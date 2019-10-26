import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../Home';
import Menu from '../Menu';
import FloatCart from '../FloatCart';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <React.Fragment>
          <main>
            <Home />
          </main>
          <FloatCart />
        </React.Fragment>
      </Route>
      <Route path="/:item">
        <Menu />
      </Route>
    </Switch>
  </Router>
);

export default App;
