import React from "react";

// Components
import Terminal from "../Terminal";

// Animations and Styling
import {Fade} from "react-reveal";
import FullHeightWrapperSC from "../full-height-wrapper-sc";

const CONTACT_TEXT = (
  <div>
    <p><b>Email: </b><a href="mailto:ncyk.siu@gmail.com" target="_blank" rel="noopener noreferrer">ncyk.siu@gmail.com</a></p>
    <p><b>GitHub: </b><a href="https://github.com/nksiu" target="_blank" rel="noopener noreferrer">nksiu</a></p>
    <p><b>LinkedIn: </b><a href="https://www.linkedin.com/in/nicholas-siu-409483182/" target="_blank" rel="noopener noreferrer">Nick Siu</a></p>
  </div>
)

const CONTACT_COMMAND = "cat contact.txt";

const backGroundColor = "#b491c8";

const Contact = () => {
  return (
    <FullHeightWrapperSC id="contact" backGroundColor={backGroundColor}>
      <div className="full-height">
        <Fade left>
          <Terminal header={"Contact"} command={CONTACT_COMMAND} body={CONTACT_TEXT}/>
        </Fade>
      </div>
    </FullHeightWrapperSC>
  )
}

export default Contact
