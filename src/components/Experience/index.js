import React from "react";
import { v4 as uuidv4 } from "uuid";
import {experiences} from "./content";
import Fade from "react-reveal";

// Components
import Card from "./card";
import { VerticalTimeline }  from "react-vertical-timeline-component";
import SEO from "../SEO";

// Styling
import "react-vertical-timeline-component/style.min.css";
import FullHeightWrapperSC from "../full-height-wrapper-sc"

const gradient = "#0d1321, #aa4b6b, #3b8d99";

const Experience = () => {
  return (
    <FullHeightWrapperSC id="experience" gradient={gradient}>
      <SEO page="experience"/>
      <div className="full-height">
        <Fade bottom>
          <h1 style={{textAlign: "center"}}>Experience</h1>
        </Fade>
        <VerticalTimeline>
          {
            experiences.map((experience) => (<Card key={uuidv4()} experience={experience}/>))
          }
        </VerticalTimeline>
      </div>
    </FullHeightWrapperSC>
  )
}

export default Experience