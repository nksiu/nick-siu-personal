import React from "react";
import { v4 as uuidv4 } from "uuid";
import {projects} from "./content";

// Components
import Card from "./card";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import StarIcon from "@material-ui/icons/Star";
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
      <h1 className="portfolio-title" style={{textAlign: "center"}}>Portfolio</h1>
        <VerticalTimeline>
          {
            projects.map((project) => (<Card key={uuidv4()} project={project}/>))
          }
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </FullHeightWrapperSC>
  )
}

export default Portfolio