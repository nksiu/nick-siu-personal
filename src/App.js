import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About"

class App extends Component {
  render() {
    return (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </Router>
    );
  };
}

export default App;
