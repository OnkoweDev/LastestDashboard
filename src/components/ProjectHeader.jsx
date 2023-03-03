import React from "react";
import "./styles/ProjectHeader.css";

const ProjectHeader = ({ image, title }) => {
  return (
    <div className="project-header">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default ProjectHeader;
