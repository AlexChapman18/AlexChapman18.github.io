// ---- Imports ----
// Styles
import "./ProjectLinks.scss";

// Icons
import GitHub from "../icons/GitHub";
import YouTube from "../icons/YouTube";

// ---- Project ----
const ProjectLinks = ({ git, youtube }) => {
  const hasRepo = git !== null && git !== "";
  const hasVideo = youtube !== null && youtube !== "";

  return (
    <div
      className={`project-links 
        ${hasRepo ? "hasRepo" : ""} ${hasVideo ? "hasVideo" : ""}`}
    >
      {hasRepo && (
        <a
          href={git}
          className={`project-link-git fw-bold`}
          disabled={!hasRepo}
        >
          <p>View GitHub</p>
          <GitHub />
        </a>
      )}
      {hasVideo && (
        <a href={youtube} className={`project-link-youtube fw-bold`}>
          <p>View Video</p>
          <YouTube />
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
