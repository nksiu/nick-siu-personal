import React from "react";

// Components
import { VerticalTimelineElement }  from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from '@material-ui/icons/Person';

// Styling
import "react-vertical-timeline-component/style.min.css";
import CardButtonWrapperSC from "./card-button-wrapper-sc";

const Card = ({project}) => {
  const whatStyle = project.type === "personal" ? "rgb(106, 215, 229)" : "rgb(233, 30, 99)"
  const whatIcon = project.type === "personal" ? <PersonIcon /> : <SchoolIcon />;

  const hasButtons = project.url !== "" || project.sourceCode !== "";
  const hasBothButtons = project.url !== "" && project.sourceCode !== "";

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
        <CardButtonWrapperSC hasButtons={hasButtons} bothButtons={hasBothButtons}>
          <span>
            {project.url ? <a href={project.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Website</a> : null}
          </span>
          <span className="source-btn">
            {project.sourceCode ? <a href={project.sourceCode} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Source Code</a> : null}
          </span>
        </CardButtonWrapperSC>
      </VerticalTimelineElement>
  )
}

export default Card