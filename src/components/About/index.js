import React from "react";

import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f9de77;
  }
`

const About = () => {
  return (
    <div>
      <GlobalStyle />
      <p>about</p>
    </div>
  )
}

export default About