// ---- Imports ----
// Styles
import './Project.scss';

// Icons
import GitHub from "../icons/GitHub";
import YouTube from "../icons/YouTube";

// ---- Project ----
const Project = ({title, text, image, git, YouTube, tool1, tool2, tool3}) => {
  const isRepo = git !== null && git !== '';
  const isVideo = YouTube !== null && YouTube !== '';

  return (
    <div className="project-container">
      <h2 className='project-title'>{title}</h2>
      <div className='project-content'>

        <img className='project-content-image' src={image} alt="Image of project" />

        <p className='project-content-text section-text'>{text}</p>

        <ul className='project-content-tools'>
          <li className='project-content-tools-item'>{tool1}</li>
          <li className='project-content-tools-item'>{tool2}</li>
          <li className='project-content-tools-item'>{tool3}</li>
        </ul>

        <div className={`project-content-links ${isRepo ? 'hasRepo' : 'noRepo'} ${isVideo ? 'hasVideo' : 'noVideo'}`}>
          <a href={git} className='project-content-links-github'>
            <p className='project-content-links-github-text'>View GitHub</p>
            <GitHub link={''}></GitHub>
          </a>
          <a href={YouTube} className={`project-content-links-youtube`}>
            <p className='project-content-links-youtube-text'>View Video</p>
            <YouTube link={''} className='project-content-links-youtube-icon'></YouTube>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Project