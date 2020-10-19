import React, {useState} from "react";

// Animations and Styling
import Typist from 'react-typist';
import VizSensor from "react-visibility-sensor";
import TerminalWrapperSC from "./terminal-wrapper-sc";

const Terminal = ({header, command, body}) => {
  const [isDoneTyping, setDoneTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const SHELL_INPUT = <span>{">"}  ~ </span>;
  const BLINKER_NODE = (
    <p>{SHELL_INPUT}<span className={"cursor"}>|</span></p>
  )

  const showBodyContent = () => {
    if (!isDoneTyping) setDoneTyping(true);
  }

  return (
    <div className="container">
        <TerminalWrapperSC>
            <div className={"terminal terminal-home"}>
              <div className={"terminal-header"}>
                {header}
                <div className={'terminal-buttons'}>
                  <VizSensor onChange={(isVisible) => {
                    setIsVisible(isVisible);
                  }}>
                    <div className={'terminal-button terminal-button-close'} />
                  </VizSensor>
                    <div className={'terminal-button terminal-button-min'} />
                    <div className={'terminal-button terminal-button-max'} />
                </div>
              </div>
              {
                isVisible && !isDoneTyping ?
                <div>
                {SHELL_INPUT}
                <Typist
                  avgTypingDelay={40}
                  startDelay={1200}
                  onTypingDone={showBodyContent}
                  cursor={{hideWhenDone: true}}
                >
                <p>{command}</p>
                </Typist>
                </div>
                :
                <div className={"doneTyping"}>
                  <span>
                    {SHELL_INPUT} <p>{command}</p>
                  </span>
                </div>
              }
              {isDoneTyping ? body : null}
              {isDoneTyping ? BLINKER_NODE: null}
            </div>
          </TerminalWrapperSC>
    </div>
  )
}

export default Terminal