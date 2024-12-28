// ---- Imports ----
// Styles
import "./Project.scss";

import ProjectLinks from "./ProjectLinks";

// ---- Project ----
const Project = ({ title, text, image, git, youtube, tool1, tool2, tool3 }) => {
  return (
    <div className="project-container">
      <h2 className="project-title">{title}</h2>
      <div className="project-content">
        <img
          className="project-content-image"
          src={image}
          alt="Project"
          loading="lazy"
        />

        <p className="project-content-text section-text">{text}</p>

        <ul className="project-content-tools">
          <li className="project-content-tools-item"> {tool1}</li>
          <li className="project-content-tools-item">{tool2}</li>
          <li className="project-content-tools-item">{tool3}</li>
        </ul>

        <ProjectLinks git={git} youtube={youtube}></ProjectLinks>
      </div>
    </div>
  );
};

export default Project;
