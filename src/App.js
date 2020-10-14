import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Header />
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/about" render={() => <About />} />
          </Router>
      </div>
    );
  };
}

export default App;
