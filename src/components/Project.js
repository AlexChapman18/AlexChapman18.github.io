// ---- Imports ----
// Styles
import "./Project.scss";

import ProjectLinks from "./sub_components/ProjectLinks";

// ---- Project ----
const Project = ({ title, text, image, git, youtube, tool1, tool2, tool3 }) => {
  return (
    <div className="px-0">
      <h2 className="fw-bold fs-3 text-center">{title}</h2>
      <div className="project-container">
        <div className="project-content-image-container">
          <img
            className="project-content-image rounded-4 border border-5 border-primary"
            src={image}
            alt="Project"
            loading="lazy"
          />
        </div>

        <div className="container-fluid">
          <p className="mb-2">{text}</p>

          <ul className="list-unstyled mb-2 fs-5">
            <li className="project-tool badge rounded-pill bg-primary">{tool1}</li>
            <li className="project-tool badge rounded-pill bg-primary">{tool2}</li>
            <li className="project-tool badge rounded-pill bg-primary">{tool3}</li>
          </ul>

          <ProjectLinks git={git} youtube={youtube}></ProjectLinks>
        </div>
      </div>
    </div>
  );
};

export default Project;
