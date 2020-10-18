import React from "react";

import { VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Card = ({project}) => {
  const whatStyle = project.type === "personal" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)"
  const whatIcon = project.type === "personal" ? <WorkIcon /> : <SchoolIcon />;

  return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={project.date}
        iconStyle={{ background: whatStyle, color: "#fff" }}
        icon={whatIcon}
      >
        <h3 className="vertical-timeline-element-title">{project.title}</h3>
        <h5 className="vertical-timeline-element-subtitle">{project.techStack}</h5>
        <p>
          {project.description}
        </p>
      </VerticalTimelineElement>
  )
}

export default Card