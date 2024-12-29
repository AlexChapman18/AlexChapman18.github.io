// ---- Imports ----
// Styles
import "./Project.scss";

import ProjectLinks from "./sub_components/ProjectLinks";

// ---- Project ----
const Project = ({ title, text, image, git, youtube, tool1, tool2, tool3 }) => {
  return (
    <div className="px-0">
      <h2 className="text-primary fw-bold fs-3 text-center">{title}</h2>
      <div className="project-container">
        <img
          className="project-content-image global-box-shadow w-75 rounded-4 mx-auto mb-2"
          src={image}
          alt="Project"
          loading="lazy"
        />

        <div className="container-fluid">
          <p className="text-primary mb-2">{text}</p>

          <ul className="list-unstyled mb-2">
            <li className="project-tool text-primary fw-bold"> {tool1}</li>
            <li className="project-tool text-primary fw-bold">{tool2}</li>
            <li className="project-tool text-primary fw-bold">{tool3}</li>
          </ul>

          <ProjectLinks git={git} youtube={youtube}></ProjectLinks>
        </div>
      </div>
    </div>
  );
};

export default Project;
