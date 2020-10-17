import React from "react";
import {createGlobalStyle} from 'styled-components'

// Components
import Terminal from "../Terminal"

// Animations
import {Fade} from "react-reveal"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #b7d2e0;
  }
`

const INTRO_TEXT = (
  <div>
    <p>
      Hello and welcome to my personal website! I'm currently a student
      at the University of British Columbia studying Computer Science. 
    </p>
  </div>
)

const INTRO_COMMAND = "cat intro.txt"

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <Fade right>
        <Terminal header={"Home"} command={INTRO_COMMAND} body={INTRO_TEXT}/>
      </Fade>
    </div>
  )
}

export default Home