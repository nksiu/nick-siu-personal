import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

class App extends Component {
  render() {
    return (
        // <Router>
        //   <Header />
        //   <Switch>
        //     <Route exact path="/experience" render={() => <Experience />} />
        //     <Route exact path="/portfolio" render={() => <Portfolio />} />
        //     <Route exact path="/contact" render={() => <Contact />} />
        //     <Route exact path="/" render={() => <About />} />
        //   </Switch>
        // </Router>
        <div className="App">
          <div>
            <Header />
          </div>
          <About />
          <Experience />
          <Portfolio/>
          <Contact />
        </div>
    );
  };
}

export default App;
