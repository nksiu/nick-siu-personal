import React from "react";

import { VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from '@material-ui/icons/Person';

const Card = ({project}) => {
  const whatStyle = project.type === "personal" ? "rgb(106, 215, 229)" : "rgb(233, 30, 99)"
  const whatIcon = project.type === "personal" ? <PersonIcon /> : <SchoolIcon />;

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
        <span>
          {project.url ? <a href={project.url} class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Website</a> : null}
        </span>
        <span>
          {project.sourceCode ? <a href={project.sourceCode} class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Source Code</a> : null}
        </span>
      </VerticalTimelineElement>
  )
}

export default Card