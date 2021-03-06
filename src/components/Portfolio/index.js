import React from "react";
import { v4 as uuidv4 } from "uuid";
import {projects} from "./content";
import {Fade} from "react-reveal";

// Components
import Card from "./card";
import { VerticalTimeline }  from "react-vertical-timeline-component";
import SEO from "../SEO"

// Styling
import "react-vertical-timeline-component/style.min.css";
import FullHeightWrapperSC from "../full-height-wrapper-sc"

const gradient = "#3b8d99, #2ebf91, #8360c3"

const Portfolio = () => {
  return (
    <FullHeightWrapperSC id="portfolio" gradient={gradient}>
      <SEO page="portfolio"/>
      <div className="full-height">
        <Fade bottom>
          <h1 className="portfolio-title" style={{textAlign: "center"}} duration={2000}>Portfolio</h1>
        </Fade>
        <VerticalTimeline>
          {
            projects.map((project) => (<Card key={uuidv4()} project={project}/>))
          }
        </VerticalTimeline>
      </div>
    </FullHeightWrapperSC>
  )
}

export default Portfolio