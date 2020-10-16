import React from "react";
import {createGlobalStyle} from 'styled-components'

import Terminal from "../Terminal"
import TerminalWrapperSC from "../Terminal/terminal-wrapper-sc"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #b7d2e0;
  }
`

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <TerminalWrapperSC>
        <Terminal header={"Home"}/>
      </TerminalWrapperSC>
    </div>
  )
}

export default Home