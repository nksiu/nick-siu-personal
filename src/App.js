import React, {Component} from 'react';
import './App.css';
import styled from "styled-components";
import {createGlobalStyle} from 'styled-components'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #b7d2e0;
  }
`

class App extends Component {
  render() {
    return (
        <Router>
          <GlobalStyle />
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
