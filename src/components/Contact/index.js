import React from "react";
import {createGlobalStyle} from 'styled-components'

// Components
import Terminal from "../Terminal"

// Animations
import {Fade} from "react-reveal"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #a8d6c7;
  }
`

const CONTACT_TEXT = (
  <div>
    <p><b>Email: </b><a href="mailto:ncyk.siu@gmail.com" target="_blank" rel="noopener noreferrer">ncyk.siu@gmail.com</a></p>
    <p><b>GitHub: </b><a href="https://github.com/nksiu" target="_blank" rel="noopener noreferrer">nksiu</a></p>
    <p><b>LinkedIn: </b><a href="https://www.linkedin.com/in/nicholas-siu-409483182/" target="_blank" rel="noopener noreferrer">Nick Siu</a></p>
  </div>
)

const CONTACT_COMMAND = "cat contact.txt"

const Contact = () => {
  return (
    <div>
      <GlobalStyle />
      <Fade left>
        <Terminal header={"Contact"} command={CONTACT_COMMAND} body={CONTACT_TEXT}/>
      </Fade>
    </div>
  )
}

export default Contact
