import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import Header from "./components/Header";
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"

class App extends Component {
  render() {
    return (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/experience" render={() => <Experience />} />
            <Route exact path="/portfolio" render={() => <About />} />
            <Route exact path="/contact" render={() => <Contact />} />
            <Route exact path="/" render={() => <About />} />
          </Switch>
        </Router>
    );
  };
}

export default App;
