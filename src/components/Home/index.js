import React from "react";
import TerminalWrapperSC from "../Terminal/terminal-wrapper-sc"

const SHELL_INPUT = <span>➜  ~ </span>

const Home = () => {
  return (
    <div>
      <TerminalWrapperSC>
        <div className={"terminal terminal-about"}>
          <div className={"terminal-header"}>
            Home
            <div className={'terminal-buttons'}>
                <div className={'terminal-button terminal-button-min'} />
                <div className={'terminal-button terminal-button-max'} />
                <div className={'terminal-button terminal-button-close'} />
            </div>
          </div>
        </div>
      </TerminalWrapperSC>
    </div>
  )
}

export default Home