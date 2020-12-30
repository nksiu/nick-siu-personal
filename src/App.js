import React, {Component} from 'react';
import './App.css';

// Components
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <About/>
          <Experience/>
          <Portfolio/>
          <Contact/>
        </div>
    );
  };
}

export default App;
