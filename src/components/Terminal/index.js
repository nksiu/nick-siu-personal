import React from "react";
import TerminalWrapperSC from "./terminal-wrapper-sc"

const SHELL_INPUT = <span>➜  ~ </span>

const Terminal = ({header}) => {
  return (
    <div className="container">
        <TerminalWrapperSC>
            <div className={"terminal terminal-home"}>
              <div className={"terminal-header"}>
                {header}
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

export default Terminal