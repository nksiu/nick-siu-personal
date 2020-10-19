import styled, {keyframes} from "styled-components";

const blink = keyframes`
  from, to {
    color: transparent;
  }
  60%{color: white;}
`

const TerminalWrapperSC = styled.div`
padding-top: 60px;
.terminal {
  background-color: #35383D;
  color: white;
  padding: 30px;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 5px;
}

.terminal-home {
  min-height: 500px;
}

.terminal-buttons {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  float: left;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: -60px;
}

.terminal-button {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: inherit;
  margin-right: 5px;
}

.terminal-button-close {
  background-color: red;
}

.terminal-button-min {
  background-color: orange;
}

.terminal-button-max {
  background-color: green
}

.terminal-header {
  width: calc(100% + 60px);
  margin: -30px -30px 13px -30px;
  text-align: center;
  border-radius: 4px 4px 0px 0px;
  background-color: white;
  color: #5f5f5f;
  position: relative;
}

.Typist p {
  display: inline-block;
}

.Typist {
  display: inline-block;
}

.cursor {
  animation: ${blink} 1s linear infinite;
}
`

export default TerminalWrapperSC
