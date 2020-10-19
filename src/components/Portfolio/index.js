import React from "react";
import { v4 as uuidv4 } from "uuid";
import {createGlobalStyle} from "styled-components";
import {projects} from "./content";

import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Components
import Card from "./card";
import StarIcon from "@material-ui/icons/Star";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #b7d2e0;
  }
`

const Portfolio = () => {
  return (
    <div>
      <GlobalStyle />
      {/* <h1 style={{textAlign: "center"}}>Experience</h1> */}
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
  )
}

export default Portfolio