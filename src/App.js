import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { NavBar } from './components';
import { MoviesList, MoviesInsert, MoviesUpdate } from './pages';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
        {/* <Route path="/" exact component={MoviesList} /> */}
          <Route path="/movies/list" component={MoviesList} />
          <Route path="/movies/create" component={MoviesInsert} />
          <Route
              path="/movies/update/:id"
              exact
              component={MoviesUpdate}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
