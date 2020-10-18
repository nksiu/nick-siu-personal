import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import Header from "./components/Header";
import About from "./components/About"
import Contact from "./components/Contact"

class App extends Component {
  render() {
    return (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/experience" render={() => <About />} />
            <Route exact path="/project" render={() => <About />} />
            <Route exact path="/contact" render={() => <Contact />} />
            <Route exact path="/" render={() => <About />} />
          </Switch>
        </Router>
    );
  };
}

export default App;
