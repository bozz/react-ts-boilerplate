import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './views/Header';
import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';

import "./styles/main.scss";

export default class App extends Component {
	render() {
		return (
			<div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/error">
              <Error type="404" default />
            </Route>
          </Switch>
        </Router>
			</div>
		);
	}
}
