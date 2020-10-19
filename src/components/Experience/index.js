import React from "react";
import { v4 as uuidv4 } from "uuid";
import {experiences} from "./content";

// Components
import Card from "./card";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import StarIcon from "@material-ui/icons/Star";

// Styling
import "react-vertical-timeline-component/style.min.css";
import FullHeightWrapperSC from "../full-height-wrapper-sc"

const backGroundColor = "#b7d2e0";

const Experience = () => {
  return (
    <FullHeightWrapperSC id="experience" backGroundColor={backGroundColor}>
      <div className="full-height">
        <h1 style={{textAlign: "center"}}>Experience</h1>
        <VerticalTimeline>
          {
            experiences.map((experience) => (<Card key={uuidv4()} experience={experience}/>))
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

export default Experience