import React from "react";
import {Rotate} from "react-reveal";

import { VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Card = ({experience}) => {
  const whatStyle = experience.type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)"
  const whatIcon = experience.type === "work" ? <WorkIcon /> : <SchoolIcon />;

  return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={experience.date}
        iconStyle={{ background: whatStyle, color: "#fff" }}
        icon={whatIcon}
      >
        <h3 className="vertical-timeline-element-title">{experience.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
        <p>
          {experience.description}
        </p>
      </VerticalTimelineElement>
  )
}

export default Card