import React from "react";

// Components
import Terminal from "../Terminal";
import SEO from "../SEO";

// Animations and Styling
import {Fade} from "react-reveal";
import FullHeightWrapperSC from "../full-height-wrapper-sc";
import Lottie from "react-lottie";
import animationData from "../../Lottie/cloud.json";
import CloudWrapperSC from "./cloud-wrapper-sc";

const INTRO_TEXT = (
  <div>
    <p>
      Hello! My name is Nick Siu and welcome to my personal website! I am a 4th year student set to graduate in May 2023
      at the University of British Columbia, majoring in Computer Science.
      I am currently seeking 2023 New Grad opportunities. In terms of experience, I am currently a Software Engineer Intern at Splunk
      and was previously at Amazon.
    </p>
      Quick Facts:
      <ul>
        <li>Born in the United States but raised in Canada</li>
        <li>Fluent in English and Japanese</li>
      </ul>
    <p><b>Resume: </b><a href="https://drive.google.com/file/d/1SDX2ujZW5XqUBVU7XsXES9SXp0L09IJd/view?usp=sharing" target="_blank" rel="noopener noreferrer">View</a></p>
  </div>
)

const INTRO_COMMAND = "cat nick.txt";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <FullHeightWrapperSC id="about" backGroundColor={null} className="ScreenBlockContainer">
      <SEO page="about"/>
      <div className="full-height">
        <CloudWrapperSC className="sub">
          <Fade right duration={1500}>
            <div className="cloud-left">
              <Lottie
                options={defaultOptions}
                height={200}
                width={200}
              />
            </div>
          </Fade>
          <Fade left duration={1500}>
            <div className="cloud-right">
              <Lottie
                options={defaultOptions}
                height={200}
                width={200}
              />
            </div>
          </Fade>
        </CloudWrapperSC>
        <Fade right>
          <Terminal header={"About"} command={INTRO_COMMAND} body={INTRO_TEXT}/>
        </Fade>
      </div>
    </FullHeightWrapperSC>
  )
}

export default About